import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  grid-template-rows: fit-content(100%) repeat(2, 1fr);
  grid-template-columns: 1fr fit-content(100%);
  grid-template-areas:
    'title title'
    'loc-input search-button'
    'detail-input detail-input';
  gap: 20px 50px;
`;

export const InfoSection = styled.div`
  display: grid;
  gap: 15px 20px;
  grid-template-columns: 120px fit-content(100%);
  grid-template-rows: repeat(5, fit-content(100%));

  margin-top: 20px;
`;

export const BankingSection = styled.div`
  display: grid;
  gap: 10px 20px;
  grid-template-columns: 120px fit-content(100%);
  grid-template-rows: repeat(5, fit-content(100%));

  width: 100%;
  padding: 25px 34px 25px auto;
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

  max-width: 380px;
  padding: 30px;

  background-color: ${COLORS.grayscale.cremeWhite};
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);
`;

export const FacilitySection = styled.div`
  display: grid;
  gap: 20px 10px;
  grid-template-columns: repeat(2, fit-content(100%));
  grid-template-rows: repeat(3, fit-content(100%));

  padding: 10px 0;
`