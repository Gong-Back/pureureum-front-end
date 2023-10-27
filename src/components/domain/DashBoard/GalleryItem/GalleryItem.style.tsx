import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  background-color: ${COLORS.grayscale.gray100};
  width: 300px;
  height: 250px;

  .gallery-img {
    object-fit: cover;
  }

  .gallery-caption {
    width: 100%;
    position: absolute;
    bottom: -25px;

    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
