import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px 0px;

  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
`;

export const Description = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '7px 0px 0px 15px',

    color: colors.grayscale.gray400,
    ...fonts.pc.caption,
    textAlign: 'left',
  };
});

export const Input = styled.input<{ isIdSection?: boolean }>(
  ({ theme, isIdSection = false }) => {
    const { colors, fonts } = theme;
    return {
      width: isIdSection ? '290px' : '100%',
      padding: '11px 26px',

      color: colors.grayscale.gray500,
      ...fonts.pc.body2R,

      border: `1px solid ${colors.grayscale.gray500}`,
      borderRadius: '25px',
    };
  },
);

export const CheckButton = styled.button(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    padding: '6px 16px',
    margin: 'auto 0px',

    color: colors.grayscale.white,
    ...fonts.pc.body2R,
    textAlign: 'center',

    background: colors.primary.greenDefault,
    borderRadius: '5px',
  };
});
