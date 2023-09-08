import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: ${(props: { isPc: boolean }) => (props.isPc ? 'flex' : 'grid')};
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding: 0px 70px;
  grid-template-columns: 50% 50%;
  margin-bottom: 100px;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 235px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;

  .title {
    margin: 15px 0px 5px;
  }
`;

export const Image = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? COLORS.grayscale.gray300 : COLORS.grayscale.gray100};
`;
