import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const ListWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 70px 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media screen and (max-width: 1640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${MEDIA_QUERIES.mobile} {
    padding: 50px 30px;
  }

  .gallery-item {
    width: 320px;
    height: 250px;
  }
`;
