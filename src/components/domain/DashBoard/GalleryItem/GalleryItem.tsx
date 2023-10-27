import Image from 'next/image';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { GalleryItemType } from '@/constants/types';

import * as styles from './GalleryItem.style';

interface GalleryItemProps extends GalleryItemType {
  className?: string;
}

const GalleryItem = ({
  id,
  imageUrl,
  caption,
  className,
}: GalleryItemProps) => (
  <styles.Wrapper onClick={() => console.log(id)} className={className}>
    <Image
      src={imageUrl}
      layout="fill"
      alt="gallery-img"
      className="gallery-img"
    />
    <Text
      color={COLORS.grayscale.dark}
      fontStyleName="body3"
      className="gallery-caption"
    >
      {caption}
    </Text>
  </styles.Wrapper>
);

export default GalleryItem;
