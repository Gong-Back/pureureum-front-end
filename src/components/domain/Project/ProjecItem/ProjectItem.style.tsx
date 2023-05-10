import { COLORS, MEDIA_QUERIES } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;

  @media ${MEDIA_QUERIES.mobile} {
    width: 300px;
    gap: 5px;
  }
`;

export const ThumbnailWrap = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 20px;
  background-color: ${COLORS.grayscale.gray100};
  position: relative;
  margin-bottom: 8px;

  @media ${MEDIA_QUERIES.mobile} {
    height: 205px;
    border-radius: 15px;
  }
`;

export const HoveringContentWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${COLORS.grayscale.blocked};
  padding: 59px 32px;
  position: absolute;
  z-index: 5;

  .intro-text {
    max-height: 82px;
    margin-bottom: 12px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  @media ${MEDIA_QUERIES.mobile} {
    padding: 50px 31px;
    border-radius: 15px;

    .intro-text {
      max-height: 75px;
    }
  }
`;

export const TagsWrap = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 2;
  gap: 5px;
`;

export const MemberStatusTag = styled.div`
  width: 87px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);

  > svg {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }

  @media ${MEDIA_QUERIES.mobile} {
    width: 79px;
    height: 32px;
    > svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 3px;
    width: 24px;
    height: 24px;

    @media ${MEDIA_QUERIES.mobile} {
      width: 22px;
      height: 22px;
    }
  }
`;
