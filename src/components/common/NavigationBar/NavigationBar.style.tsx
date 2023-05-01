import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  padding: 0px 30px;

  box-shadow: 0px 0px 4px rgba(88, 88, 88, 0.25);

  & > svg {
    margin: 5px 0 16px 0;
  }
`;

export const NavItemList = styled.div`
  display: flex;
  gap: 0px 30px;

  margin: auto 0px;
`;

export const NavItem = styled.span(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    color: colors.grayscale.gray500,
    ...fonts.pc.body2R,
  };
});
