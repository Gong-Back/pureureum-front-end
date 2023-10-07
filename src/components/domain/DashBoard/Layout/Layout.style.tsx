import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${COLORS.background2};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;
