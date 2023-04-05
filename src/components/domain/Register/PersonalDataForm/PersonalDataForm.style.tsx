import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px 0px;

  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
`;

export const Title = styled.h5(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    width: '100%',
    margin: '0px 0px 15px 0px',

    color: colors.grayscale.gray500,
    ...fonts.pc.body1B,
  };
});

export const Input = styled.input<{ width?: number }>(({ theme, width }) => {
  const { colors, fonts } = theme;
  return {
    width: `${width ?? 400}px`,
    padding: '11px 26px',

    color: colors.grayscale.gray500,
    ...fonts.pc.body2R,

    border: `1px solid ${colors.grayscale.gray500}`,
    borderRadius: '25px',

    '&::placeholder': {
      textAlign: 'right',
    },
  };
});

export const Button = styled.button<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => {
    const { colors, fonts } = theme;
    return {
      padding: '11px 80px',

      color: isSelected ? colors.grayscale.white : colors.grayscale.gray500,
      ...fonts.pc.body2B,
      textAlign: 'center',

      background: isSelected
        ? colors.primary.greenDefault
        : colors.grayscale.gray100,
      borderRadius: '25px',
    };
  },
);
