import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px 0px;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  > .account-input {
    &:disabled {
      color: ${COLORS.grayscale.gray400};
    }
  }

  > .email-input {
    width: 290px;
  }

  > .description {
    margin: 7px 0px 0px 15px;
  }

  > .check-button {
    margin: auto 0px;
    width: 96px;
  }
`;
