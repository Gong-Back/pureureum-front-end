import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin: 94px auto;
`;

export const Title = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '9px',
    ...fonts.pc.body2B,
    color: `${colors.grayscale.dark}`,
  };
});

export const Section = styled.section(({ theme }) => {
  const { colors } = theme;
  return {
    display: 'flex',
    gap: '0px 25px',

    width: '600px',

    padding: '15px 30px 15px 40px',

    border: `1px solid ${colors.grayscale.gray100}`,
    borderRadius: '10px',
  };
});

export const Label = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    width: '100px',
    margin: '4px auto 4px 0px',

    ...fonts.pc.body2B,
    color: `${colors.grayscale.gray700}`,
  };
});

export const Content = styled.span(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    flexGrow: '1',
    margin: '4px 0px',

    ...fonts.pc.body2R,
    color: `${colors.grayscale.gray700}`,
  };
});

export const ChangeButton = styled.button<{ width?: number }>(
  ({ theme, width = '100px' }) => {
    const { colors, fonts } = theme;
    return {
      width,
      height: '35px',

      marginLeft: 'auto',
      padding: '6px auto',

      backgroundColor: colors.grayscale.white,
      border: `1px solid ${colors.primary.greenDefault}`,
      borderRadius: '25px',

      color: colors.primary.greenDefault,
      ...fonts.pc.body3,
    };
  },
);

export const ConfirmButton = styled.button<{ isConfirm: boolean }>(
  ({ theme, isConfirm = false }) => {
    const { colors, fonts } = theme;
    return {
      width: '300px',
      height: '45px',

      marginRight: 'auto',
      padding: '9px auto',

      backgroundColor: isConfirm
        ? colors.primary.greenDefault
        : colors.grayscale.gray400,
      borderRadius: '5px',

      color: colors.grayscale.white,
      ...fonts.pc.body2B,
    };
  },
);
