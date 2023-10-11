import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 30px 30px 80px;

  @media ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  flex: 3;

  display: grid;
  grid-template-areas:
    'schedule notice'
    'gallery gallery';
  gap: 30px;

  .schedule-widget {
    grid-area: schedule;
    min-height: 450px;
  }
  .notice-widget {
    grid-area: notice;
    min-height: 450px;
  }

  .gallery-widget {
    grid-area: gallery;
    height: 100%;
  }

  @media ${MEDIA_QUERIES.mobile} {
    grid-template-areas:
      'schedule'
      'notice'
      'gallery';
  }
`;
export const RightContent = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 30px;

  .members-widget {
    min-height: 370px;
  }

  .board-widget {
    height: 100%;
  }
`;
