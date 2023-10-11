import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  background-color: ${COLORS.grayscale.white};
  box-shadow: 0px 0px 4px rgba(88, 88, 88, 0.25);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavItemList = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 30px;

  height: 40px;

  a {
    font-size: 17px;
    line-height: 40px;
    font-weight: 400;
    color: ${COLORS.grayscale.gray600};
  }
`;
