import Image from 'next/image';
import {
  type ChangeEvent,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { commentDummyData } from 'src/dummyData';

import ReplyIcon from '@/assets/icons/replyIcon.svg';
import defaultProfileImage from '@/assets/images/defaultProfile.png';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS } from '@/constants/styles';
import {
  CommentActionContext,
  CommentValueContext,
} from '@/stores/context/comment';

import * as style from './CommentWrapper.style';

const CommentWrapper = ({ children }: PropsWithChildren) => {
  const { sortMethod, commentMode, selectedCommentId } =
    useContext(CommentValueContext);
  const { toggleSortMethod } = useContext(CommentActionContext);

  const [writtenComment, setWrittenComment] = useState('');
  const repliedComment = selectedCommentId
    ? commentDummyData[selectedCommentId]
    : null;

  const handleWrittenComment = (e: ChangeEvent<HTMLInputElement>) => {
    setWrittenComment(e.target.value);
  };

  const postWrittenComment = () => {};

  const commentAmount = commentDummyData.length;
  const isValidReplyMode = commentMode === 'REPLY' && repliedComment;

  return (
    <style.Wrapper>
      <style.Header>
        <Text fontStyleName="body1B" color={COLORS.grayscale.gray700}>
          {`의견 (${commentAmount})`}
        </Text>
        <style.SortSection>
          <Text
            className="sortOption"
            fontStyleName="body3"
            color={
              sortMethod === 'LATEST'
                ? COLORS.grayscale.gray500
                : COLORS.grayscale.gray200
            }
            onClick={() => toggleSortMethod('LATEST')}
          >
            최신순
          </Text>
          <Text
            className="sortOption"
            fontStyleName="body3"
            color={
              sortMethod === 'POPULAR'
                ? COLORS.grayscale.gray500
                : COLORS.grayscale.gray200
            }
            onClick={() => toggleSortMethod('POPULAR')}
          >
            공감순
          </Text>
        </style.SortSection>
      </style.Header>
      <style.CommentList>{children}</style.CommentList>
      {isValidReplyMode && (
        <style.ReplyCommentSection>
          <ReplyIcon className='icon'/>
          <style.ReplyWritterSection>
            <Image
              width={25}
              height={25}
              src={defaultProfileImage}
              alt="profile"
              className="profile"
            />
            <Text
              className="nickname"
              fontStyleName="body2B"
              color={COLORS.grayscale.gray700}
            >
              {repliedComment.nickname}
            </Text>
            <Text fontStyleName="body3" color={COLORS.grayscale.gray400}>
              {repliedComment.writtenDate}
            </Text>
          </style.ReplyWritterSection>
          <Text className='content' fontStyleName="body3" color={COLORS.grayscale.gray600}>
            {repliedComment.content}
          </Text>
        </style.ReplyCommentSection>
      )}
      <style.WriteSection>
        <TextInput
          isFilled
          className="input"
          value={writtenComment}
          placeholder="자유롭게 의견을 작성해주세요"
          onChange={handleWrittenComment}
        />
        <Button
          isFilled
          themeColor={
            writtenComment.length
              ? COLORS.primary.default
              : COLORS.grayscale.gray400
          }
          onClick={postWrittenComment}
        >
          작성
        </Button>
      </style.WriteSection>
    </style.Wrapper>
  );
};

export default CommentWrapper;
