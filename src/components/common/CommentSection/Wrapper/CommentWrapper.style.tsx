import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

export const Wrapper = styled.div`
    padding: 40px;

    display: flex;
    flex-direction: column;
    gap: 30px 0;

    background: ${COLORS.grayscale.white};
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(88, 88, 88, 0.25);

    @media ${MEDIA_QUERIES.mobile} {
        padding: 30px 25px;
    }

    @media ${MEDIA_QUERIES.tablet} {
        padding: 40px;
    }
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

export const ReplyCommentSection = styled.div`
  width: 100%; 
  padding: 10px 28px;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  grid-template-areas:
    'icon writter close'
    'icon content close';
  gap: 0 12px;

  background: ${`${COLORS.primary.bright}33`};
  border-radius: 100px;

  .icon {
    margin: auto 0;
    grid-area: icon;
    fill: ${COLORS.grayscale.gray600};
  }

  .close {
    margin: auto 0;
    cursor: pointer;
    grid-area: close;
  }

  .content {
    grid-area: content;
    margin: auto 0;
  }
`

export const ReplyWritterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    grid-area: writter;

    .profile {
        border-radius: 50%;
    }

    .nickname {
        margin: 0 10px 0 6px;
    }
`