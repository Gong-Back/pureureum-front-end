// middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { AuthRepository } from '@/apis/auth';
import { SocialRepository } from '@/apis/social';
import { SocialPlatformType } from '@/constants/types';
import { socialPlatformList } from '@/constants/apis/social';

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
      ['naver', 'kakao', 'google'].includes(checkedType);

    if (!code || !socialType || !isSocialPlatformType(socialType))
      return NextResponse.redirect(`${origin}/login`);

    const response = await SocialRepository.loginAsync(code, socialType);
    return NextResponse.redirect(
      response.isSuccess ? origin : `${origin}/login`,
    );
  }

  // 만약 요청 header에 access token, refresh token이 존재한다면 이를 cookie로 설정.
  const response = NextResponse.next();
  if (request.headers.has('authorization'))
    response.cookies.set('accessToken', request.headers.get('authorization'), {
      maxAge: 30 * 60, // access token의 유효 기간 30분 반영
      httpOnly: true,
      secure: true,
    });

  if (request.headers.has('refreshToken'))
    response.cookies.set('refreshToken', request.headers.get('refreshToken'), {
      maxAge: 7 * 24 * 60 * 60, // refresh token의 유효 기간 7일 반영
      httpOnly: true,
      secure: true,
    });

  return response;
}
