import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  background-color: ${COLORS.grayscale.gray100};

  .gallery-img {
    object-fit: cover;
  }
`;
