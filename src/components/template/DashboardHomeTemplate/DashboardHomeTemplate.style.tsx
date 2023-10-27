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
    min-height: 475px;
  }

  .board-widget {
    flex: 2;
    min-height: 475px;
  }

  .members-widget {
    flex: 1;
    max-width: 400px;
    min-height: 475px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    flex-direction: column;

    .schedule-widget,
    .members-widget {
      max-width: 100%;
    }
  }
`;
export const BottomContent = styled.div`
  height: 100%;

  .gallery-widget {
    height: 100%;
    min-height: 450px;
  }
`;

export const GalleryList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px 20px;
`;

export const GalleryContent = styled.div`
  width: 100%;
  height: 580px;
  overflow-x: scroll;
`;
