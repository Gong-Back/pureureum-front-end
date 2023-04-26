import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px 0px;

  margin: 0px 34px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 335px;

  > .description {
    margin: auto 0px;
    text-align: left;
  }

  > .register-button {
    width: 180px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0px 20px;
`;
