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

export const ProjectListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px 0;

  width: 100%;
`;


export const EmptyNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px 0;

  .seek-button {
    width: unset;
    padding: 8px 46px;
  }

  margin: auto;
`;
