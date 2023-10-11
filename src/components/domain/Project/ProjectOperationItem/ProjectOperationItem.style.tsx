import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 36px;

  display: flex;
  align-items: center;
  gap: 0 20px;

  border-radius: 10px;
  background: ${COLORS.grayscale.cremeWhite};
  box-shadow: 0px 0px 5px 0px rgba(111, 111, 111, 0.2);

  @media ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    align-items: start;
    gap: 8px 0;
  }

  @media ${MEDIA_QUERIES.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 0 20px;
  }
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 5px 20px;

  background: ${COLORS.grayscale.gray100};
  border-radius: 20px;
`;
