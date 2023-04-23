import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  gap: 0px 30px;

  width: 415px;
  margin-right: auto;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  padding: 13px 0px 13px auto;
`;

export const UserId = styled.p(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    ...fonts.pc.subtitle1,
    color: `${colors.grayscale.gray700}`,
  };
});

export const ButtonContainer = styled.div`
  display: flex;
`;

export const DefaultProfileImg = styled.div(({ theme }) => {
  const { colors } = theme;
  return {
    width: '120px',
    height: '120px',

    backgroundColor: `${colors.primary.logo}`,
  };
});
