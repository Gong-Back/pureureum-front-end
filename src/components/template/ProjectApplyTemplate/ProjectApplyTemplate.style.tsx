import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  margin: 130px 100px;

  display: grid;
  grid-template-rows: repeat(4, fit-content(100%));
  grid-template-columns: 740px fit-content(100%);
  grid-template-areas:
    'title aside'
    'personal aside'
    'banking aside'
    'checkbox aside';
  row-gap: 60px;
  justify-content: space-between
`;

export const Title = styled.h3`
  ${({ theme }) => {
    const { colors } = theme;
    return {
      gridArea: 'title',
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