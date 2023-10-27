import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  min-height: 100vh;
  background-color: ${COLORS.background2};
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 150px);
  margin-top: 60px;

  @media ${MEDIA_QUERIES.mobile} {
    width: 100%;
  }
`;

export const HeaderWrapper = styled.div(({ isHome }: { isHome: boolean }) => ({
  width: '100%',
  height: 'fit-content',
  minHeight: '180px',
  padding: '40px 50px',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  borderRadius: '0px 0px 0px 30px',
  background: isHome
    ? 'radial-gradient(759.59% 149.63% at 8.46% 109.19%, #68DCA4 0%, #2DBDDA 100%)'
    : COLORS.primary.default,

  '.create-post-btn': {
    position: 'absolute',
    right: '40px',
    bottom: '30px',
  },
}));
