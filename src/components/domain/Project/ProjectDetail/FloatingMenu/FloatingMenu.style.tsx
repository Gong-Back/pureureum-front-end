import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 380px;
  border-radius: 10px;
  background: ${COLORS.grayscale.cremeWhite};
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);

  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 45px;
  border-bottom: 1px solid ${COLORS.grayscale.gray100};

  :last-of-type {
    border: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const MenuField = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
