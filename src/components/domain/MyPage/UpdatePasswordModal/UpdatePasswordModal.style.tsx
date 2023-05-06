import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px 0px;

  width: 400px;
  margin: 80px auto 30px auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 330px;
  }

  > input {
    @media ${MEDIA_QUERIES.mobile} {
      width: 330px;
    }
  }

  > .confirm-btn {
    grid-area: confirm-btn;
    margin: 110px auto 0 auto;
    width: 300px;

    @media ${MEDIA_QUERIES.mobile} {
      margin: 65px auto 0 auto;
      width: 200px;
    }
  }
`;
