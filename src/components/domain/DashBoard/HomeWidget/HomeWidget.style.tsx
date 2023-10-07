import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${COLORS.grayscale.white};
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(200, 200, 200, 0.25);

  width: 100%;
  padding: 20px 30px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
`;
