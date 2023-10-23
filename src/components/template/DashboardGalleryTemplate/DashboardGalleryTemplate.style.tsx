import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';

export const ListWrapper = styled.div`
  width: 100%;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${MEDIA_QUERIES.mobile} {
    padding: 50px 30px;
  }
`;
