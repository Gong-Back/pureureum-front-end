import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 700px;
  margin: auto;

  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);
`;

export const Header = styled.header(({ theme }) => {
  const { colors } = theme;
  return {
    height: '60px',
    padding: '14px',

    background: colors.grayscale.white,
  };
});

export const Title = styled.h5(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px auto',
    textAlign: 'center',

    color: colors.grayscale.gray600,
    ...fonts.pc.body1B,
  };
});

export const IconWrap = styled.div`
  position: relative;
  top: calc(-100% + 4px);
  left: calc(100% - 24px);
`;

export const Section = styled.section(({ theme }) => {
  const { colors } = theme;
  return {
    padding: '14px',

    backgroundColor: colors.grayscale.white,
    boxShadow: 'inset 0px 2px 4px -2px rgba(88, 88, 88, 0.25)',
  };
});
