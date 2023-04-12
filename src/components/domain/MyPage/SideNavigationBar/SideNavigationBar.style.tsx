import styled from '@emotion/styled';

export const Wrapper = styled.aside(({ theme }) => {
  const { colors } = theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '69px 0px',

    width: '220px',
    height: '100vh',

    padding: '68px 50px 0px 50px',

    background: colors.grayscale.background,
    borderRight: `1px solid ${colors.grayscale.gray100}`,
  };
});

export const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;
`;

export const NavGroupTitle = styled.h5(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',

    color: colors.grayscale.gray700,
    ...fonts.pc.body2B,
    textAlign: 'right',
  };
});

export const NavItemList = styled.div(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '15px 0px',
  
    margin: 'auto 0px',
    
    color: colors.grayscale.gray500,
    ...fonts.pc.body3,
    cursor: 'pointer',
    
  };
});

export const NavItemGroup = styled.div`
  display: flex;
  gap: 0px 6px;
  justify-content: flex-end;

  & > svg {
    margin: auto 0px;
  }
`;
