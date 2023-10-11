import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  gap: 0px 30px;

  margin-right: auto;

  @media ${MEDIA_QUERIES.mobile} {
    gap: 0px 21px;
    width: 366px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  margin: 13px auto 13px 0;

  @media ${MEDIA_QUERIES.mobile} {
    margin: 0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0px 15px;

  > .profile-img {
    width: 140px;
  }
`;

export const DefaultProfileImg = styled.div`
  width: 120px;
  height: 120px;

  background: ${COLORS.primary.logo};
  border-radius: 50%;

  @media ${MEDIA_QUERIES.mobile} {
    width: 90px;
    height: 90px;
  }
`;
