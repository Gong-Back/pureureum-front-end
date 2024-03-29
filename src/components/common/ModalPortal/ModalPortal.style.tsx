import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: scroll;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;
