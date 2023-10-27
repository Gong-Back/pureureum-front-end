import Image from 'next/image';

import defaultProfileImage from '@/assets/images/defaultProfile.png';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import type { ReplyCommentType } from '@/constants/types';

import * as style from './ReplyComment.style';

const ReplyComment = ({ nickname, writtenDate, content }: ReplyCommentType) => {
  const profileUrl = defaultProfileImage;

  return (
    <style.Wrapper>
      <style.WriterSection>
        <Image
          width={25}
          height={25}
          src={profileUrl}
          alt="profile"
          className="profile"
        />
        <Text className='nickname' fontStyleName="body2B" color={COLORS.grayscale.gray700}>
          {nickname}
        </Text>
        <Text fontStyleName="body3" color={COLORS.grayscale.gray400}>
          {writtenDate}
        </Text>
      </style.WriterSection>
      <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
        {content}
      </Text>
    </style.Wrapper>
  );
};

export default ReplyComment;
