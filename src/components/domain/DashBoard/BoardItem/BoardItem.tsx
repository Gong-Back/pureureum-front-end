import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { BoardItemType } from '@/constants/types';

import * as styles from './BoardItem.style';

const BoardItem = ({ id, title, content, time }: BoardItemType) => {
  const router = useRouter();
  const { pid } = router.query;

  const moveToDetailPage = () =>
    router.push({
      pathname: '/dashboard/[pid]/board',
      query: { pid, menu: 'item', id },
    });

  return (
    <styles.Wrapper onClick={moveToDetailPage}>
      <styles.Top>
        <styles.TitleWrapper>
          <styles.ProfileWrapper>
            <Image
              src="/projectThumbnail.jpg"
              alt="profile-img"
              layout="fill"
            />
          </styles.ProfileWrapper>
          <Text color={COLORS.grayscale.gray700} fontStyleName="body2B">
            {title}
          </Text>
        </styles.TitleWrapper>
        <Text color={COLORS.grayscale.gray400} fontStyleName="body3">
          {time}
        </Text>
      </styles.Top>
      <styles.Bottom>
        <Text
          color={COLORS.grayscale.gray600}
          fontStyleName="body3"
          className="content"
        >
          {content}
        </Text>
      </styles.Bottom>
    </styles.Wrapper>
  );
};

export default BoardItem;
