import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 128px;
  border-radius: 5px;
  background-color: ${COLORS.grayscale.white};
  padding: 20px;
  cursor: pointer;
`;

export const ProfileWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${COLORS.grayscale.gray100};
  position: relative;
  overflow: hidden;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Bottom = styled.div`
  width: 100%;
  margin-left: 34px;

  .content {
    width: 90%;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;
