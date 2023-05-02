import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px 0px;

  width: 1000px;
  margin: auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 400px;
  }

  @media ${MEDIA_QUERIES.tablet} {
    width: 670px;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0px 10px;

  > .asterisk {
    margin: auto 0px;
  }
`;

export const Section = styled.div`
  display: grid;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(4, fit-content(100%));
  grid-template-areas:
    'title title title title'
    'volunteer-button experiment-button healing-button others-button';

  gap: 20px 30px;

  > .title {
    grid-area: title;
  }

  > .volunteer-button {
    grid-area: volunteer-button;
    background-color: ${COLORS.grayscale.gray100};
    color: ${COLORS.grayscale.gray700};
  }

  > .experiment-button {
    grid-area: experiment-button;
    background-color: ${COLORS.grayscale.gray100};
    color: ${COLORS.grayscale.gray700};
  }

  > .healing-button {
    grid-area: healing-button;
    background-color: ${COLORS.grayscale.gray100};
    color: ${COLORS.grayscale.gray700};
  }

  > .others-button {
    grid-area: others-button;
    background-color: ${COLORS.grayscale.gray100};
    color: ${COLORS.grayscale.gray700};
  }
`;
