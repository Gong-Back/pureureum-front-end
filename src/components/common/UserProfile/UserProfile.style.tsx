import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0px 10px;

  height: 100%;
  margin-left: 10px;
`;

export const Nickname = styled.span`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      margin: '0px auto',
      color: colors.grayscale.gray700,
      ...fonts.pc.body2B,
    };
  }}
`;
