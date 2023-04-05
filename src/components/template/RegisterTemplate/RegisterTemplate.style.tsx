import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  height: 547px;
  margin: 128px auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0px;
`;

export const Title = styled.h5(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',

    color: colors.grayscale.dark,
    ...fonts.pc.subtitle1,
  };
});

export const Subtitle = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',

    color: colors.grayscale.gray500,
    ...fonts.pc.body1R,
  };
});

export const Feedback = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',

    color: colors.primary.caption,
    ...fonts.pc.caption,
  };
});

export const ConfirmButton = styled.button<{ isConfirm: boolean }>(
  ({ theme, isConfirm = false }) => {
    const { colors, fonts } = theme;
    return {
      width: '100%',
      height: '46px',

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
