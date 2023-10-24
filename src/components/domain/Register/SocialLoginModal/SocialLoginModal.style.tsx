import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 400px;
  margin: 80px auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 280px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  margin-bottom: 60px;

  svg {
      width: 280px;
    }

  @media ${MEDIA_QUERIES.mobile} {
    gap: 8px 0;
    margin-bottom: 40px;

    svg {
      width: 220px;
    }
  }
`;

export const RegisterSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px 0;
`;

export const SocialButton = styled.button<{ backgroundColor: string }>`
  ${({ backgroundColor }) => css`
    width: 400px;
    height: 48px;
    padding: 0 96px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0 4px;

    background-color: ${backgroundColor};
    border-radius: 8px;
    cursor: pointer;

    @media ${MEDIA_QUERIES.mobile} {
      width: 280px;
      height: 44px;
      padding: 0 36px;
    }
  `}
`;
