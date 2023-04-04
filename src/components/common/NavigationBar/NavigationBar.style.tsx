import styled from '@emotion/styled';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  padding: 0px 50px 0px 27px;

  & > svg {
    margin: auto 0px;
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
