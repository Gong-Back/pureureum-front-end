// middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { SocialRepository } from '@/apis/social';
import { SocialPlatformType } from '@/constants/types';
import { SOCIAL_PLATFORM_LIST, ERROR_CODE } from '@/constants/apis';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('authorization');
  const { pathname, origin, searchParams } = request.nextUrl;

  // 로그인, 회원가입 시도 시 access token이 존재한다면 메인 화면으로 redirect.
  if (pathname.startsWith('/auth')) {
    if (accessToken) return NextResponse.redirect(origin);
  }

  // OAuth2 회원가입 이라면, 임시로 저장된 유저 정보를 서버에서 인계 받아야 한다.
  if (pathname.startsWith('/auth/register')) {
    const email = searchParams.get('email');
    const socialType = searchParams.get('socialType');

    if (!email || !socialType) return NextResponse.next();

    const tempSearchResponse = await SocialRepository.tempSearchUserAsync(
      email,
    );

    if (!tempSearchResponse.isSuccess) {
      const loginPageUrl = new URL(`/auth/login`, origin);
      loginPageUrl.searchParams.set('feedback', 'NOT_STORED');
      return NextResponse.redirect(loginPageUrl);
    }

    return NextResponse.next();
  }

  // 소셜 로그인 진행 시, 인가 코드가 있다면 login API 성공 여부에 따라 redirect.
  if (pathname.startsWith('/oauth2/redirect')) {
    const code = searchParams.get('code');
    const socialType = pathname.split('/').at(-1);

    // TODO: 아래와 같이 타입을 좁힐 수 있는 유틸 함수를 어떻게 처리할지 논의 필요
    const isSocialPlatformType = (
      checkedType: string,
    ): checkedType is SocialPlatformType =>
      SOCIAL_PLATFORM_LIST.includes(checkedType);

    const loginPageUrl = new URL(`/auth/login`, origin);

    if (!code || !socialType || !isSocialPlatformType(socialType)) {
      loginPageUrl.searchParams.set('feedback', 'WRONG_PLATFORM');
      return NextResponse.redirect(loginPageUrl);
    }

    // OAuth2 로그인을 먼저 진행하고, 성공했다면 메인 페이지로 리다이렉트 시킨다.
    const loginResponse = await SocialRepository.loginAsync(code, socialType);
    if (loginResponse.isSuccess) return NextResponse.redirect(origin);

    // OAuth2 로그인을 실패했다면, 이미 타 플랫폼으로 가입한 계정인지 신규 유저인지를 판별한다.
    if (
      loginResponse.result.code === ERROR_CODE.REQUEST_RESOURCE_ALREADY_EXISTS
    ) {
      loginPageUrl.searchParams.set('feedback', 'ALREADY_EXISTS');
      return NextResponse.redirect(loginPageUrl);
    }

    const userSocialEmail = loginResponse.result.data!.email;

    const registerPageUrl = new URL(`/auth/register`, origin);
    registerPageUrl.searchParams.set('socialType', socialType);
    registerPageUrl.searchParams.set('email', userSocialEmail);

    return NextResponse.redirect(registerPageUrl);
  }

  return NextResponse.next();
}