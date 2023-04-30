import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;

export const Aside = styled.div`
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


export const Section = styled.section`
  display: flex;
  gap: 0px 25px;

  width: 600px;

  padding: 15px 30px 15px 40px;

  border: 1px solid ${COLORS.grayscale.gray100};
  border-radius: 10px;

  > .info-label {
    margin: 4px auto 4px 0px;
  }

  > .info-content {
    margin: 4px 0px;
    flex-grow: 1;
  }

  > .profile-button {
    width: 140px;
  }
`;
