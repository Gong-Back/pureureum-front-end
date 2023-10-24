import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 55px 0px;

  width: 400px;
  margin: 128px auto 0px auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

export const VisibleSection = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Section = styled.section`
    display: flex;
    gap: 16px 0px;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0px;

  > .confirm-button {
    width: 100%;
  }
`;

export const Feedback = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    margin: '0px',
    color: colors.caption,
    ...fonts.pc.caption,
  };
});
