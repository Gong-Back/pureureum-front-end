import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  /*height: 100%;*/

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;

  .intro {
  }

  .add-gallery-btn {
    width: 60%;
  }
`;

export const ImageInputWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: ${COLORS.grayscale.gray100};
  position: relative;
  margin: 30px 0px 50px;

  input {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;
