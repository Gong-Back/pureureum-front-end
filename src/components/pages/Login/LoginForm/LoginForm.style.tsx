import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 75px;
`;

export const Input = styled.input`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      padding: '11px 26px',
      marginBottom: '30px',

      color: colors.grayscale.gray500,
      ...fonts.pc.body2R,

      border: `1px solid ${colors.grayscale.gray500}`,
      borderRadius: '25px',
    };
  }}
`;

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      marginTop: '15px',
      padding: '11px',

      color: colors.grayscale.cremeWhite,
      ...fonts.pc.body2B,
      textAlign: 'center',

      background: colors.primary.greenDefault,
      borderRadius: '5px',
    };
  }}
`;
