import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: calc(100% - 28px);
  margin-right: 28px;

  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const WritterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .profile {
        border-radius: 50%;
    }

    .nickname {
        margin: 0 10px 0 6px;
    }
`