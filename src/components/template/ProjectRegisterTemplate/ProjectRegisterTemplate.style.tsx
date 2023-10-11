import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 70px auto 55px;
  padding: 0 40px;
  max-width: 1100px;

  > .title-input {
    border: none;
    width: 100%;
    height: 90px;
    margin-top: 30px;
    padding: 0px;

    &::placeholder {
      color: ${COLORS.grayscale.gray300};
      font-size: 30px;
      font-weight: 800;
    }
  }
`;
