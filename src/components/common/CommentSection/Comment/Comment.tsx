import Image from 'next/image';
import { useContext, useState } from 'react';

import { commentReplyDummyData } from 'src/dummyData';

import ApprovedIcon from '@/assets/icons/approvedIcon.svg';
import DeniedIcon from '@/assets/icons/deniedIcon.svg';
import defaultProfileImage from '@/assets/images/defaultProfile.png';
import Button from '@/components/common/Button';
import ReplyComment from '@/components/common/CommentSection/ReplyComment';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { CommentType } from '@/constants/types';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import useToggle from '@/hooks/useToggle';
import { CommentActionContext } from '@/stores/context/comment';

import * as style from './Comment.style';

/** 한 뎁스 당 보여줄 대댓글 갯수 */
const COMMENT_LIMIT = 5;

const Comment = ({
  commentId,
  nickname,
  content,
  approved,
  denied,
  replyAmount,
}: CommentType) => {
  const { value: isReplyVisible, onToggle: toggleReplyVisible } = useToggle();
  const { selectRepliedComment } = useContext(CommentActionContext);
  const [replyCommentPage, setReplyCommentPage] = useState(1);

  const profileUrl = defaultProfileImage;
  const replyCommentList = commentReplyDummyData[commentId];

  const currentBreakpoint = useMeasureBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  const lastPage = Math.ceil(replyAmount / COMMENT_LIMIT);
  const isLastPage = lastPage <= replyCommentPage;

  const handleReplyCollapse = () => {
    if (isLastPage) {
      toggleReplyVisible();
      selectRepliedComment(1);
      return;
    }
    setReplyCommentPage((prev) => prev + 1);
  };

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
              {nickname}
            </Text>
            <Text fontStyleName="body3" color={COLORS.grayscale.gray400}>
              10분 전
            </Text>
          </style.Writter>
          <style.Vote>
            <ApprovedIcon fill={COLORS.grayscale.gray700} />
            <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
              {isMobile ? approved : `공감 (${approved})`}
            </Text>
            <DeniedIcon fill={COLORS.grayscale.gray700} />
            <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
              {isMobile ? denied : `반대 (${denied})`}
            </Text>
          </style.Vote>
        </style.HeaderSection>
        <Text fontStyleName="body3" color={COLORS.grayscale.gray700}>
          {content}
        </Text>
        <style.BottomSection>
          <Button
            className='button'
            themeColor={COLORS.grayscale.gray100}
            isFilled
            isRound
            onClick={toggleReplyVisible}
          >
            <Text fontStyleName="body3" color={COLORS.grayscale.gray500}>
              {`답글 ${isReplyVisible ? '접기' : '보기'} (${replyAmount})`}
            </Text>
          </Button>
          <Button
            className='button'
            themeColor={COLORS.grayscale.gray100}
            isFilled
            isRound
            onClick={() => selectRepliedComment(commentId)}
          >
            <Text fontStyleName="body3" color={COLORS.grayscale.gray500}>
              답글 작성
            </Text>
          </Button>
        </style.BottomSection>
      </style.Wrapper>
      {isReplyVisible && (
        <style.ReplySection>
          {replyCommentList
            .slice(0, COMMENT_LIMIT * replyCommentPage)
            .map((reply) => (
              <ReplyComment
                nickname={reply.nickname}
                content={reply.content}
                writtenDate={reply.writtenDate}
              />
            ))}
          <Text
            className="collapse"
            onClick={handleReplyCollapse}
            fontStyleName="body3"
            color={COLORS.grayscale.gray400}
          >
            {`대댓글 ${isLastPage ? '접기' : `펼치기`} (${replyCommentPage}/${lastPage})`}
          </Text>
        </style.ReplySection>
      )}
    </>
  );
};

export default Comment;
