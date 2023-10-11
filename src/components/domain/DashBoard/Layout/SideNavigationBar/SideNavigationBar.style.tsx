import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.aside(({ isMobile }: { isMobile: boolean }) => ({
  minWidth: 150,
  backgroundColor: COLORS.grayscale.white,
  boxShadow: '0px 5px 6px 0px #F2F2F2',

  position: isMobile ? 'fixed' : 'static',
  height: isMobile ? '100%' : '',
  zIndex: 99,
}));

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: fixed;
  top: 100px;
  left: 28px;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 0px 6px;
  justify-content: flex-end;
  cursor: pointer;

  & > svg {
    margin: auto 0px;
    width: 18px;
    height: 18px;
  }

  > .selected {
    color: ${COLORS.grayscale.gray700};
  }
`;

export const FloatingButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${COLORS.primary.logo};
  box-shadow: 0px 0px 10px 0px rgba(88, 88, 88, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 90px;
  left: 30px;
  z-index: 100;
`;
