import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 700px;
  margin: auto;

  border-radius: 5px;
`;

export const Header = styled.header(({ theme }) => {
  const { colors } = theme;
  return {
    height: '60px',
    padding: '14px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: colors.grayscale.white,
    boxShadow: '0px 0px 4px rgba(88, 88, 88, 0.25)',
  };
});

export const Title = styled.h5(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px auto',
    color: colors.grayscale.gray600,
    ...fonts.pc.body1B,
  };
});

export const Section = styled.section(({ theme }) => {
  const { colors } = theme;
  return {
    padding: '14px',

    backgroundColor: colors.grayscale.white,
  };
});
