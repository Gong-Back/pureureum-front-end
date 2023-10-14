import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

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
`

export const BottomSection = styled.div`
    display: flex;
    gap: 10px;
`