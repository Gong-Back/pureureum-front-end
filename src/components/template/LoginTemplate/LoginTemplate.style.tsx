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

// NOTICE : theme을 받아서 조건부 처리할때는 Functional 형식으로 처리하자.
export const Title = styled.h5(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',

    color: colors.grayscale.gray500,
    ...fonts.pc.body1R,
  };
});
