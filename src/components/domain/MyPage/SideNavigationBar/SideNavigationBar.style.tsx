import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 69px 0px;

  width: 220px;
  min-height: 100vh;

  padding: 68px 50px 0px 50px;

  border-right: 1px solid ${COLORS.grayscale.gray100};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  > .section-title {
    text-align: right;
  }
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px 0px;

  margin: auto 0px;
  cursor: pointer;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 0px 6px;
  justify-content: flex-end;

  & > svg {
    margin: auto 0px;
  }

  > .selected {
    color: ${COLORS.grayscale.gray700};
  }
`;
