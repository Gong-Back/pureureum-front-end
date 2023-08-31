import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
`

export const MainSection = styled.main`
  margin: 130px 100px;

  display: grid;
  justify-content: space-between;
  grid-template-rows: repeat(4, fit-content(100%));
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-areas:
    'title aside'
    'personal aside'
    'banking aside'
    'checkbox aside';
  gap: 60px 125px;

  @media ${MEDIA_QUERIES.tablet} {
    grid-template-rows: repeat(5, fit-content(100%));
    grid-template-columns: fit-content(100%);
    grid-template-areas:
      'title'
      'aside'
      'personal'
      'banking'
      'checkbox';
    }
`;

export const Title = styled.h3`
  ${({ theme }) => {
    const { colors } = theme;
    return {
      gridArea: 'title',
      rowGap: '42px',
      color: colors.grayscale.gray700,
      fontSize: '35px',
      lineHeight: '48px',
      fontWeight: 'bold',
      margin: 0,
    };
  }}
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: personal;

  @media ${MEDIA_QUERIES.tablet} {
    margin: 0 25px;
  }
`;

export const InfoDetail = styled.div`
  display: grid;
  gap: 15px 20px;
  grid-template-columns: 120px fit-content(100%);
  grid-template-rows: repeat(5, fit-content(100%));

  margin-top: 20px;
`;

export const BankingSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: banking;

  margin-bottom: 23px;

  @media ${MEDIA_QUERIES.tablet} {
    margin: 0 25px;
  }
`;

export const BankingDetail = styled.div`
  display: grid;
  gap: 10px 20px;
  grid-template-columns: 120px fit-content(100%);
  grid-template-rows: repeat(5, fit-content(100%));

  width: 100%;
  padding: 25px 34px;
  margin-top: 20px;

  border: 1px solid ${COLORS.grayscale.gray300};
  background-color: ${COLORS.grayscale.cremeWhite};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CheckBoxSection = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-rows: repeat(3, fit-content(100%));
  grid-area: checkbox;

  & > input {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${COLORS.grayscale.gray500};
  }

  @media ${MEDIA_QUERIES.tablet} {
    margin: 0 25px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 28px;
  grid-area: aside;

  max-width: 380px;
  padding: 30px;
  margin-bottom: auto;

  background-color: ${COLORS.grayscale.cremeWhite};
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);

  @media ${MEDIA_QUERIES.tablet} {
    max-width: unset;
    width: 100%;
  }
`;

export const FacilitySection = styled.div`
  display: grid;
  gap: 27px 0;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-rows: repeat(3, fit-content(100%));

  padding: 10px 0;
`;

export const FacilityDetail = styled.div`
  display: grid;
  gap: 20px 10px;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-rows: repeat(3, fit-content(100%));

  padding: 10px 0;
`;

export const ShareSection = styled.div`
  display: flex;
  column-gap: 15px;

  margin: 0 auto;
`

export const ButtonSection = styled.div`
  display: flex;
  column-gap: 25px;
  justify-content: center;

  width: 100%;
  margin: 0 auto 55px auto;
`