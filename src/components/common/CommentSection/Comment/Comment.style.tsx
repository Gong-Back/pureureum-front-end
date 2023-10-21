import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: calc(100% - 28px);
  margin-right: 28px;

  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const HeaderSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Writter = styled.div`
    display: flex;
    gap: 0 6px;
    align-items: center;
    justify-content: center;

    .profile {
        border-radius: 50%;
    }
`

export const Vote = styled.div`
    display: flex;
    gap: 0 6px;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

export const BottomSection = styled.div`
    display: flex;
    gap: 10px;

    .button {
        height: 33px;
    }
`

export const ReplySection = styled.div`
    width: calc(100% - 50px);
    margin-left: auto;

    display: flex;
    flex-direction: column;
    gap: 24px;

    .collapse {
        cursor: pointer;
    }

`

export const WriteSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 16px;

    .input {
        width: 100%;
    }
`
