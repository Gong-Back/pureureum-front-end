import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.aside(({ isMobile }: { isMobile: boolean }) => ({
  minWidth: 220,
  backgroundColor: COLORS.background2,
  borderRight: `1px solid ${COLORS.grayscale.gray100}`,

  position: isMobile ? 'fixed' : 'static',
  height: isMobile ? '100%' : '',
}));

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  position: fixed;
  top: 110px;
  left: 60px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  > .section-title {
    text-align: right;
  }
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px 0px;

  margin: auto 0px;
  cursor: pointer;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 0px 6px;
  justify-content: flex-end;
  color: ${COLORS.grayscale.gray500};

  & > svg {
    margin: auto 0px;
    width: 18px;
    height: 18px;
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
