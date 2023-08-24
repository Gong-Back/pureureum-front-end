import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  height: calc(100vh - 60px);
`;

export const InfoSection = styled.div`
  display: grid;
  gap: 15px 20px;
  grid-template-rows: 120px fit-content(100%);
  grid-template-columns: repeat(5, fit-content(100%));
`;

export const BankingSection = styled.div`
  display: grid;
  gap: 10px 20px;
  grid-template-rows: 120px fit-content(100%);
  grid-template-columns: repeat(5, fit-content(100%));

  width: 100%;
  padding: 25px 34px 25px auto;

  border: 1px solid ${COLORS.grayscale.gray300};
  background-color: ${COLORS.grayscale.gray300};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CheckBoxSection = styled.div`
  display: grid;
  gap: 15px;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(3, fit-content(100%));

  & > input {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${COLORS.grayscale.gray500};
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  max-width: 380px;
  padding: 30px;
`;
