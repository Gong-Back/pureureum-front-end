import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
    padding: 40px 50px;

    display: flex;
    flex-direction: column;
    gap: 30px 0;

    background: ${COLORS.grayscale.white};
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(88, 88, 88, 0.25);
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SortSection = styled.div`
    display: flex;
    gap: 0 16px;
    justify-content: center;

    .sortOption {
        cursor: pointer;
    }
`

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px 0;

    max-height: 600px;
    overflow-y: scroll;
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
