import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin: 94px auto;
`;

export const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px 0px;
  margin: 58px 0px 96px 0px;
`;

export const Section = styled.section(({ theme }) => {
  const { colors } = theme;
  return {
    display: 'flex',
    gap: '0px 25px',

    width: '600px',

    padding: '15px 30px 15px 40px',

    border: `1px solid ${colors.grayscale.gray100}`,
    borderRadius: '10px',
  };
});

export const Label = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    width: '100px',
    margin: '4px auto 4px 0px',

    ...fonts.pc.body2B,
    color: `${colors.grayscale.gray700}`,
  };
});

export const Content = styled.span(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    flexGrow: '1',
    margin: '4px 0px',

    ...fonts.pc.body2R,
    color: `${colors.grayscale.gray700}`,
  };
});
