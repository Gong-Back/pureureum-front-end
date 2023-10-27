import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;

  .add-gallery-btn {
    width: 60%;
    height: 50px;
  }

  .caption-input {
    border: none;
    border-bottom: 1px solid ${COLORS.grayscale.gray600};
    border-radius: 0px;
    padding-left: 5px;
    margin-bottom: 30px;
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

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  svg {
    transform: rotate(45deg);
  }
`;
