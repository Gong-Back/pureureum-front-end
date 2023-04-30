import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  width: 600px;

  padding: 30px 40px;

  border: 1px solid ${COLORS.grayscale.gray100};
  border-radius: 10px;
`;

export const Section = styled.div`
  display: flex;
  gap: 0px 25px;

  > .info-label {
    width: 100px;
    margin: 4px 0px;
  }

  > .info-content {
    margin: 4px 0px;
  }
`;
