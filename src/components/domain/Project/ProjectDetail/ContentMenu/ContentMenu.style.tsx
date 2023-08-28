import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLORS.grayscale.gray200};
  display: flex;
  gap: 30px;
  padding-bottom: 15px;
`;

export const Menu = styled.div`
  cursor: pointer;
`;
