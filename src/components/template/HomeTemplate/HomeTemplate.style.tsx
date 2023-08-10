import { COLORS, MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 70px;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${COLORS.grayscale.gray100};
`;

export const ProjectListWrap = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;

  @media screen and (min-width: 1000px) and (max-width: 1229px) {
    width: 730px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    width: 630px;
  }

  @media screen and (max-width: 689px) {
    width: 300px;
  }
`;
