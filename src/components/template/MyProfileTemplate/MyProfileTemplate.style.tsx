import { COLORS, MEDIA_QUERIES } from '@/constants/styles';
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

export const Aside = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  margin: 94px auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 370px;
    margin: 88px auto;
  }

  > .confirm-button {
    width: 300px;

    @media ${MEDIA_QUERIES.mobile} {
      width: 250px;
    }
  }
`;

export const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px 0px;
  margin: 58px 0px 96px 0px;

  @media ${MEDIA_QUERIES.mobile} {
    gap: 25px 0px;
    margin: 58px 0px 70px 0px;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 0px 25px;

  width: 100%;

  padding: 15px 30px 15px 40px;

  border: 1px solid ${COLORS.grayscale.gray100};
  border-radius: 10px;

  @media ${MEDIA_QUERIES.mobile} {
    gap: 0px;
    padding: 15px 30px;
  }

  > .info-label {
    width: 100px;
    margin: 4px auto 4px 0px;
  }

  > .info-content {
    margin: 4px 0px;
    flex-grow: 1;
  }

  > .phone-button {
    width: 100px;
    margin: auto;

    @media ${MEDIA_QUERIES.mobile} {
      width: 90px;
    }
  }

  > .profile-button {
    width: 140px;
    margin-left: auto;

    @media ${MEDIA_QUERIES.mobile} {
      width: 130px;
    }
  }
`;
