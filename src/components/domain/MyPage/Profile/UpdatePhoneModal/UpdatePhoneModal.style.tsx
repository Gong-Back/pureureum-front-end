import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  display: grid;
  gap: 30px 15px;

  grid-template-rows: fit-content(100%) 1fr;
  grid-template-columns: fit-content(100%) 1fr;
  grid-template-areas:
    'title title'
    'phone-input verify-btn'
    'verify-input verify-input'
    'confirm-btn confirm-btn';

  width: 400px;
  margin: 90px auto 30px auto;

  @media ${MEDIA_QUERIES.mobile} {
    width: 330px;
    margin: 82px auto 30px auto;
  }

  > .title {
    text-align: center;
    grid-area: title;
  }

  > .phone-input {
    grid-area: phone-input;
    width: 269px;

    @media ${MEDIA_QUERIES.mobile} {
      width: 200px;
    }
  }

  > .verify-btn {
    grid-area: verify-btn;
    width: 116px;
    margin: auto;
  }

  > .verify-input {
    grid-area: verify-input;

    @media ${MEDIA_QUERIES.mobile} {
      width: 320px;
    }
  }

  > .confirm-btn {
    grid-area: confirm-btn;
    margin: 93px auto 0 auto;
    width: 300px;

    @media ${MEDIA_QUERIES.mobile} {
      margin: 57px auto 0 auto;
      width: 200px;
    }
  }
`;
