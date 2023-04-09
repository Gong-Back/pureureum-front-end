import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 55px 0px;

  width: 400px;
  margin: 0px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

export const VisibleSection = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Section = styled.section<{ currentRegisterStep: number }>(
  ({ currentRegisterStep }) => ({
    display: 'flex',
    gap: '16px 0px',

    transform: `translateX(${-100 * currentRegisterStep}%)`,
    transition: '0.25s all ease-in-out',
  }),
);

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
