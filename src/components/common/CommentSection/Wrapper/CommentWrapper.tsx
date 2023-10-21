import {
  type ChangeEvent,
  type PropsWithChildren,
  Children,
  useContext,
  useState,
} from 'react';

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
  const { sortMethod } = useContext(CommentValueContext);
  const { toggleSortMethod } = useContext(CommentActionContext);

  const [writtenComment, setWrittenComment] = useState('');

  const handleWrittenComment = (e: ChangeEvent<HTMLInputElement>) => {
    setWrittenComment(e.target.value);
  };

  const commentAmount = Children.count(children);

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
        >
          작성
        </Button>
      </style.WriteSection>
    </style.Wrapper>
  );
};

export default CommentWrapper;
