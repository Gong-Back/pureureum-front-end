import styled from '@emotion/styled';
import Link from 'next/link';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px 0px;

  margin: 0px 34px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;

  width: 335px;
`;

export const Description = styled.span`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      margin: 'auto 0px',

      color: colors.grayscale.gray500,
      ...fonts.pc.body1R,
      textAlign: 'left',
    };
  }}
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0px 20px;
`;

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      padding: '9px 56px',

      color: colors.primary.greenDefault,
      ...fonts.pc.subtitle3,
      textAlign: 'center',

      background: colors.grayscale.white,
      border: `1px solid ${colors.primary.greenDefault}`,
      borderRadius: '50px',
    };
  }}
`;
