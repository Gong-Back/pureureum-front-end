import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px 0px;

  width: 400px;
  margin: 80px auto 30px auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 330px;
  }

  > input {
    &:last-child {
      margin-bottom: 110px;
    }

    @media ${MEDIA_QUERIES.mobile} {
      width: 330px;
    }
  }

  > .confirm-btn {
    width: 300px;

    @media ${MEDIA_QUERIES.mobile} {
      width: 200px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 110px auto 0 auto;

  > .feedback {
    margin-bottom: 16px;
  }

  > .confirm-btn {
    width: 300px;

    @media ${MEDIA_QUERIES.mobile} {
      width: 200px;
    }
  }
`;
