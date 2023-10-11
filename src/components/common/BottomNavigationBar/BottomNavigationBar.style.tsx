import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background-color: ${COLORS.grayscale.white};
  box-shadow: 0px 0px 4px 0px rgba(88, 88, 88, 0.25);

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  cursor: pointer;
  color: ${(props) => props.color};

  & > svg {
    width: 18px;
    height: 18px;
  }
`;
