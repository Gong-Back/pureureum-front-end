import styled from '@emotion/styled';

export const Title = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px 0px 9px',
    ...fonts.pc.body2B,
    color: `${colors.grayscale.dark}`,
  };
});

export const Wrapper = styled.section(({ theme }) => {
  const { colors } = theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px 0px',

    width: '600px',

    padding: '30px 40px',

    border: `1px solid ${colors.grayscale.gray100}`,
    borderRadius: '10px',
  };
});

export const Section = styled.div`
  display: flex;
  gap: 0px 25px;
`;

export const Label = styled.span(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    width: '100px',
    margin: '4px 0px',

    ...fonts.pc.body2B,
    color: `${colors.grayscale.gray700}`,
  };
});

export const Content = styled.span(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '4px 0px',
    ...fonts.pc.body2R,
    color: `${colors.grayscale.gray700}`,
  };
});
