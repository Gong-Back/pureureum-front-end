import { NextApiRequest, NextApiResponse } from 'next';

import { ApiErrorInstance } from '@/apis/API';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const { accessToken, refreshToken } = req.cookies;
      return res.status(200).json({
        code: 200,
        messages: [],
        data: { accessToken, refreshToken },
      });
    }
    case 'POST': {
      const { accessToken, refreshToken } = req.body;

      if (!accessToken || !refreshToken) {
        throw new ApiErrorInstance({
          code: 400,
          messages: ['요청에 토큰 값이 없습니다.'],
          data: null,
        });
      }

      res.setHeader('Set-Cookie', [
        `accessToken=${accessToken}; path=/; Max-Age=1800; sameSite=lax;`,
        `refreshToken=${refreshToken}; path=/; Max-Age=86400; sameSite=lax;`,
      ]);
      return res.status(200).json({
        code: 200,
        messages: ['정상적으로 토큰을 추가했습니다.'],
        data: null,
      });
    }
    case 'DELETE': {
      res.setHeader('Set-Cookie', [
        `accessToken=delete; path=/; Max-Age=0;`,
        `refreshToken=delete; path=/; Max-Age=0;`,
      ]);
      return res.status(200).json({
        code: 200,
        messages: ['정상적으로 토큰을 삭제했습니다.'],
        data: null,
      });
    }
    default:
      return res
        .status(400)
        .json({ code: 400, messages: ['잘못된 요청입니다.'], data: null });
  }
}
