import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  height: calc(100vh - 60px);
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  height: calc(100vh - 60px);
  padding: 60px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  .seek-button {
    width: unset;
    padding: 6px 46px;
    margin: auto 0;
  }
`;

export const EmptyNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .inner-text {
    margin: auto;
  }

  height: 100%;
`;
