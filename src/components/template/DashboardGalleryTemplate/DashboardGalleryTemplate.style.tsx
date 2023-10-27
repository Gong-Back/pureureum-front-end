import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const ListWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 70px 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 30px;

  @media screen and (max-width: 1550px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 690px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${MEDIA_QUERIES.mobile} {
    padding: 50px 30px;
  }
`;
