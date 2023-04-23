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

  // 소셜 로그인 진행 시, 인가 코드가 있다면 login API 성공 여부에 따라 redirect.
  if (pathname.startsWith('/oauth2/redirect')) {
    const code = searchParams.get('code');
    const socialType = pathname.split('/').at(-1);

    // TODO: 아래와 같이 타입을 좁힐 수 있는 유틸 함수를 어떻게 처리할지 논의 필요
    const isSocialPlatformType = (
      checkedType: string,
    ): checkedType is SocialPlatformType =>
      SOCIAL_PLATFORM_LIST.includes(checkedType);

    const loginPageUrl = new URL(`/auth/register`, origin);

    if (!code || !socialType || !isSocialPlatformType(socialType)) {
      loginPageUrl.searchParams.set('feedback', 'WRONG_PLATFORM');
      return NextResponse.redirect(loginPageUrl);
    }

    const loginResponse = await SocialRepository.loginAsync(code, socialType);
    if (loginResponse.isSuccess) return NextResponse.redirect(origin);

    if (
      loginResponse.result.code === ERROR_CODE.REQUEST_RESOURCE_ALREADY_EXISTS
    ) {
      loginPageUrl.searchParams.set('feedback', 'ALREADY_EXISTS');
      return NextResponse.redirect(loginPageUrl);
    }

    const registerPageUrl = new URL(`/auth/register`, origin);
    registerPageUrl.searchParams.set('socialType', socialType);
    registerPageUrl.searchParams.set('email', loginResponse.result.data!.email);

    return NextResponse.redirect(registerPageUrl);
  }

  return NextResponse.next();
}
