import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  gap: 0 20px;

  width: 1000px;
  margin: 70px auto 55px auto;

  > svg {
    margin: auto 0;
    cursor: pointer;
  }

  @media ${MEDIA_QUERIES.mobile} {
    width: 1200px;
    margin-left: 50px;
  }

  @media ${MEDIA_QUERIES.tablet} {
    width: 800px;
    margin-left: 50px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 126px 0;

  width: 1000px;
  margin: auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 400px;
  }

  @media ${MEDIA_QUERIES.tablet} {
    width: 670px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px 25px;

  margin: 0 auto 40px auto;

  > .bottom-btn {
    width: 255px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    width: 180px;
  }
`;
