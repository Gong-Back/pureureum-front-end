import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  padding: 0px 50px 0px 27px;

  & > svg {
    margin: auto 0px;
  }
`;

export const NavItemList = styled.div`
  display: flex;
  gap: 0px 30px;

  margin: auto 0px;
`;

// FIXME : 일관된 스타일링 문법을 채용해야 할 것 같음, 추후 논의 필요 (template Literal OR CSS Object)
export const NavItem = styled.span`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      color: colors.grayscale.gray500,
      ...fonts.pc.body2R,
    };
  }}
`;
