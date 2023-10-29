import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 140px;
  max-height: 42px;

  margin-top: auto;

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border: 1.5px solid ${COLORS.grayscale.gray600};
  position: relative;
  cursor: pointer;
`;

export const MenuWrap = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
