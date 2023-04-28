import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  gap: 0px 30px;

  width: 415px;
  margin-right: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  margin: 13px 0px 13px auto;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0px 15px;
`;

export const DefaultProfileImg = styled.div`
  width: 120px;
  height: 120px;

  background: ${COLORS.primary.logo};
  border-radius: 50%;
`;
