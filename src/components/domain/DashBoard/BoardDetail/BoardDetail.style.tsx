import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  margin: 15px 0px;
  align-items: center;
  gap: 10px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 50px;
  background-color: ${COLORS.grayscale.white};
  border-radius: 10px;
  margin-bottom: 30px;

  @media ${MEDIA_QUERIES.mobile} {
    padding: 20px;
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 50px;
  background-color: ${COLORS.grayscale.white};
  border-radius: 10px;

  @media ${MEDIA_QUERIES.mobile} {
    padding: 20px;
  }
`;
