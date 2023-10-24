// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

import { ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import { ERROR_CODE, SOCIAL_PLATFORM_LIST } from '@/constants/apis';
import { SocialPlatformType } from '@/constants/types';

const isSocialPlatformType = (
  checkedType: string,
): checkedType is SocialPlatformType =>
  SOCIAL_PLATFORM_LIST.includes(checkedType);

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  const { pathname, origin, searchParams } = request.nextUrl;
  const mainPageUrl = new URL(`/`, origin);

  // 로그인, 회원가입 시도 시 access token이 존재한다면 메인 화면으로 redirect.
  if (pathname.startsWith('/auth')) {
    if (accessToken) return NextResponse.redirect(origin);
  }

  // OAuth2 회원가입 이라면, 임시로 저장된 유저 정보를 서버에서 인계 받아야 한다.
  if (pathname.startsWith('/auth/register')) {
    const email = searchParams.get('email');
    const socialType = searchParams.get('socialType');

    if (!email || !socialType) return NextResponse.redirect(mainPageUrl);

    try {
      await AuthRepository.tempSearchUserAsync(email);
      return NextResponse.next();
    } catch (error) {
      mainPageUrl.searchParams.set('feedback', 'NOT_STORED');
      return NextResponse.redirect(mainPageUrl);
    }
  }

  // 소셜 로그인 진행 시, 인가 코드가 있다면 login API 성공 여부에 따라 redirect.
  if (pathname.startsWith('/oauth2/redirect')) {
    const verifyCode = searchParams.get('code');
    const socialType = pathname.split('/').at(-1);

    if (!verifyCode || !socialType || !isSocialPlatformType(socialType)) {
      mainPageUrl.searchParams.set('feedback', 'WRONG_PLATFORM');
      return NextResponse.redirect(mainPageUrl);
    }

    try {
      // OAuth2 로그인을 먼저 진행하고, 성공했다면 메인 페이지로 리다이렉트 시킨다.
      const { code, data } = await AuthRepository.loginAsync({
        verifyCode,
        socialType,
      });

      // 로그인에 실패할 경우, 서버로부터 받은 에러 Response를 담아 Throw 한다.
      if (code !== 200) {
        throw new ApiErrorInstance({ code, data, messages: [] });
      }

      await AuthRepository.setJwtCookieAsync(data.accessToken);
      return NextResponse.redirect(origin);
    } catch (error) {
      const { code, data } = error as ApiErrorInstance;

      if (code === ERROR_CODE.REQUEST_RESOURCE_ALREADY_EXISTS) {
        mainPageUrl.searchParams.set('feedback', 'ALREADY_EXISTS');
        return NextResponse.redirect(mainPageUrl);
      }

      const registerPageUrl = new URL(`/auth/register`, origin);

      if (data) {
        const userSocialEmail = data.email;
        registerPageUrl.searchParams.set('socialType', socialType);
        registerPageUrl.searchParams.set('email', userSocialEmail);
      }

      return NextResponse.redirect(registerPageUrl);
    }
  }

  return NextResponse.next();
}
