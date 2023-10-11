import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 360px;
  height: 280px;
  border-radius: 5px;
  background-color: ${COLORS.background2};
  box-shadow: 0px 0px 6px rgba(88, 88, 88, 0.25);
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 187px;
  border-radius: 5px 5px 0px 0px;
`;

export const TextContainer = styled.div`
  width: 300px;
  margin: 17px auto;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  border: 1px solid ${COLORS.grayscale.gray600};
  background-color: transparent;
  outline: none;

  & checked {
    /*background-color: ${COLORS.primary.default};*/
  }
`;
