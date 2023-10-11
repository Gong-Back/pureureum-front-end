import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 140px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border: 1.5px solid ${COLORS.primary.default};
  position: relative;
  cursor: pointer;

  > svg {
    position: absolute;
    top: 8px;
    right: 15px;
    width: 24px;
    height: 24px;
    transform: rotate(-90deg);
  }

  > .non-selected-menu {
    border-top: 1.5px solid ${COLORS.primary.default};
  }
`;

export const MenuWrap = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
