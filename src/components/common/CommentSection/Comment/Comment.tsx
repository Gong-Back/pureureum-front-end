import Image from 'next/image';
import { type ChangeEvent, useState } from 'react';

import ApprovedIcon from '@/assets/icons/approvedIcon.svg';
import DeniedIcon from '@/assets/icons/deniedIcon.svg';
import defaultProfileImage from '@/assets/images/defaultProfile.png';
import Button from '@/components/common/Button';
import ReplyComment from '@/components/common/CommentSection/ReplyComment';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS } from '@/constants/styles';
import useToggle from '@/hooks/useToggle';

import * as style from './Comment.style';

const Comment = () => {
  const { value: isViewReply, onToggle: toggleViewReply } = useToggle();
  const { value: isWriteReply, onToggle: toggleWriteReply } = useToggle();
  const [replyComment, setReplyComment] = useState('');

  const handleReplyComment = (e: ChangeEvent<HTMLInputElement>) => {
    setReplyComment(e.target.value);
  };

  const handleToggleWriteReply = () => {
    if (!isViewReply) return;
    toggleWriteReply();
  };

  const profileUrl = defaultProfileImage;

  return (
    <>
      <style.Wrapper>
        <style.HeaderSection>
          <style.Writter>
            <Image
              width={25}
              height={25}
              src={profileUrl}
              alt="profile"
              className="profile"
            />
            <Text fontStyleName="body2B" color={COLORS.grayscale.gray700}>
              관리자
            </Text>
            <Text fontStyleName="body3" color={COLORS.grayscale.gray400}>
              10분 전
            </Text>
          </style.Writter>
          <style.Vote>
            <ApprovedIcon fill={COLORS.grayscale.gray700} />
            <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
              공감 (10)
            </Text>
            <DeniedIcon fill={COLORS.grayscale.gray700} />
            <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
              반대 (0)
            </Text>
          </style.Vote>
        </style.HeaderSection>
        <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
          댓글 내용입니다.
        </Text>
        <style.BottomSection>
          <Button
            themeColor={COLORS.grayscale.gray100}
            isFilled
            isRound
            onClick={toggleViewReply}
          >
            <Text fontStyleName="body3" color={COLORS.grayscale.gray500}>
              답글 보기 (10)
            </Text>
          </Button>
          <Button
            themeColor={COLORS.grayscale.gray100}
            isFilled
            isRound
            onClick={handleToggleWriteReply}
          >
            <Text fontStyleName="body3" color={COLORS.grayscale.gray500}>
              답글 작성
            </Text>
          </Button>
        </style.BottomSection>
      </style.Wrapper>
      {isViewReply && (
        <style.ReplySection>
          <ReplyComment />
          {isWriteReply && (
            <style.WriteSection>
              <TextInput
                isFilled
                className="input"
                value={replyComment}
                placeholder="자유롭게 대댓글을 작성해주세요"
                onChange={handleReplyComment}
              />
              <Button
                isFilled
                themeColor={
                  replyComment.length
                    ? COLORS.primary.default
                    : COLORS.grayscale.gray400
                }
              >
                작성
              </Button>
            </style.WriteSection>
          )}
        </style.ReplySection>
      )}
    </>
  );
};

export default Comment;
