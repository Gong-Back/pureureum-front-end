import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.aside`
  min-width: 150px;
  background-color: ${COLORS.grayscale.white};
  box-shadow: 0px 5px 6px 0px #f2f2f2;
  z-index: 99;

  @media ${MEDIA_QUERIES.mobile} {
    position: fixed;
    min-width: 130px;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: fixed;
  top: 100px;
  left: 40px;

  .selected > * {
    color: ${COLORS.grayscale.gray700};
  }
`;

export const NavItem = styled.div`
  display: flex;
  gap: 0px 6px;
  justify-content: flex-end;
  cursor: pointer;

  svg {
    margin: auto 0px;
    width: 18px;
    height: 18px;
    color: ${COLORS.grayscale.gray500};
  }
`;

export const FloatingButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${COLORS.primary.logo};
  box-shadow: 0px 0px 10px 0px rgba(88, 88, 88, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 90px;
  left: 30px;
  z-index: 100;
`;
