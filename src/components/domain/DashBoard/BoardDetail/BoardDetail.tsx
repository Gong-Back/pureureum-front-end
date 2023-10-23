import Text from '@/components/common/Text';
import UserProfile from '@/components/common/UserProfile';
import { COLORS } from '@/constants/styles';
import { BoardItemDetailType } from '@/constants/types';

import * as styles from './BoardDetail.style';

const BoardDetail = ({ data }: { data: BoardItemDetailType }) => {
  const {
    id,
    writerInfo: { profileUrl, name },
    title,
    content,
    time,
    comments,
  } = data;

  return (
    <styles.Wrapper>
      <Text color={COLORS.grayscale.dark} fontStyleName="title">
        {title}
      </Text>
      <styles.ProfileWrapper>
        <UserProfile nickname={name} imageSrc={profileUrl} />
        <Text fontStyleName="body3" color={COLORS.grayscale.gray400}>
          {time}
        </Text>
      </styles.ProfileWrapper>
      <styles.ContentWrapper>{content}</styles.ContentWrapper>
      <styles.CommentWrapper>댓글</styles.CommentWrapper>
    </styles.Wrapper>
  );
};

export default BoardDetail;
