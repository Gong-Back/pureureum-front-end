import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;

  @media ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    padding-bottom: 80px;
  }
`;

export const TopContent = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 30px;

  .schedule-widget {
    flex: 1;
    max-width: 400px;
    min-height: 400px;
  }
  .board-widget {
    flex: 2;
    min-height: 400px;
  }

  .members-widget {
    flex: 1;
    max-width: 400px;
    min-height: 400px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    flex-direction: column;

    .schedule-widget,
    .members-widget {
      max-width: 100%;
    }
  }
`;
export const RightContent = styled.div`
  height: 100%;

  .gallery-widget {
    height: 100%;
    min-height: 450px;
  }
`;
