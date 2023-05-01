import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@/constants/styles';

const DEFAULT_SIZES = {
  big: { width: 170, height: 50, mobileWidth: 145, mobileHeight: 45 },
  small: { width: 80, height: 34, mobileWidth: 70, mobileHeight: 32 },
};

export const Wrapper = styled.div<{
  backgroundColor: string;
  sizeType: 'small' | 'big';
}>(({ backgroundColor, sizeType }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: sizeType !== 'small' ? '0px 5px' : '0px',

  width: DEFAULT_SIZES[sizeType ?? 'big'].width,
  height: DEFAULT_SIZES[sizeType ?? 'big'].height,

  backgroundColor,
  borderRadius: '30px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: DEFAULT_SIZES[sizeType ?? 'big'].mobileWidth,
    height: DEFAULT_SIZES[sizeType ?? 'big'].mobileHeight,
  },
}));

export const IconWrap = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 31px;
`;
