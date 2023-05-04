import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  > .title-input {
    border: none;
    width: 100%;
    height: 90px;
    margin-top: 30px;
    padding: 0px;
    color: ${COLORS.grayscale.gray700};
    font-size: 30px;
    font-weight: 800;

    &::placeholder {
      color: ${COLORS.grayscale.gray300};
    }
  }

  @media ${(props) => props.theme.mediaQueries.mobile} {
    > .step2-horizonal-wrap {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const Section = styled.div`
  margin: 25px 0px;

  > input {
    width: 100%;
  }
  > .sub-title {
    margin-bottom: 30px;
    span {
      color: ${COLORS.caption};
      margin-left: 10px;
    }
  }
  > .content-input {
    height: 800px;
  }
  > .deposition-info {
    height: 250px;
  }
`;

export const HorizonalWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  > .count-input {
    width: 400px;
    :disabled {
      background-color: ${COLORS.grayscale.gray200};
    }
  }
  > .count-section {
    margin-right: 120px;
  }
`;

export const TextArea = styled.textarea(({ theme }) => {
  const { colors, fonts, mediaQueries } = theme;
  return {
    color: colors.grayscale.gray500,
    ...fonts.pc.body2R,

    width: '100%',
    height: 300,
    resize: 'none',
    backgroundColor: colors.background2,
    border: 'none',
    borderRadius: 10,
    padding: '27px 18px',

    [`@media ${mediaQueries.mobile}`]: {
      ...fonts.mobile.body2R,
    },
  };
});

export const CheckboxWrap = styled.label(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    display: 'flex',
    alignItems: 'center',
    color: colors.grayscale.gray500,
    ...fonts.pc.body1B,
    width: 150,
  };
});

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  background-image: url(/nonCheckedBoxIcon.svg);
  appearance: none;
  margin-right: 10px;

  :checked {
    background-image: url(/checkedBoxIcon.svg);
  }
`;

export const PaymentTypeContainer = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
