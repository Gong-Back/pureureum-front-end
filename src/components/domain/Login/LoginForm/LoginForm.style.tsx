import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  width: 400px;

  > .login-input {
    margin-bottom: 30px;
    width: 100%;
  }

  > .login-button {
    margin-top: 15px;
    width: 100%;
  }
`;

export const Feedback = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '8px auto',
    color: colors.caption,
    ...fonts.pc.caption,
  };
});
