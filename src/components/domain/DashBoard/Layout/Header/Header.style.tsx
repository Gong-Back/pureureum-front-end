import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div(({ isMain }: { isMain: boolean }) => ({
  width: '100%',
  height: 'fit-content',
  minHeight: '200px',
  padding: '40px 50px',
  position: 'relative',

  borderRadius: '0px 0px 0px 30px',
  background: isMain
    ? 'radial-gradient(759.59% 149.63% at 8.46% 109.19%, #68DCA4 0%, #2DBDDA 100%)'
    : COLORS.primary.default,

  '.create-post-btn': {
    position: 'absolute',
    right: '40px',
    bottom: '30px',
  },
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