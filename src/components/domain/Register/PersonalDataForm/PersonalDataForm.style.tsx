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

  > .title {
    width: 100%;
    margin-bottom: 15px;
  }

  > .input {
    width: 110px;
    &::placeholder {
      text-align: right;
      padding-right: 25px;
    }
  }

  > .year {
    width: 148px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const ToggleButton = styled.button<{ isSelected?: boolean }>(
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
