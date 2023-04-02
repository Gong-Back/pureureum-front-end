import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 400px;
  margin: 128px auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 32px 0px;

  margin-bottom: 70px;
`;

export const Title = styled.h5`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      margin: '0px',

      color: colors.grayscale.gray500,
      ...fonts.pc.body1R,
    };
  }}
`;
