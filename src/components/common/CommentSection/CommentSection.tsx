import {
  type ChangeEvent,
  type PropsWithChildren,
  useState,
} from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS } from '@/constants/styles';

import * as style from './CommentSection.style';

const COMMENT_SORT_TYPE = {
  공감순: 'POPULAR',
  최신순: 'LATEST',
} as const;

const CommentSection = ({ children }: PropsWithChildren) => {
  const [sortMethod, setSortMethod] =
    useState<keyof typeof COMMENT_SORT_TYPE>('공감순');
  const [writtenComment, setWrittenComment] = useState('');

  const handleWrittenComment = (e: ChangeEvent<HTMLInputElement>) => {
    setWrittenComment(e.target.value);
  };

  return (
    <style.Wrapper>
      <style.Header>
        <Text fontStyleName="body1B" color={COLORS.grayscale.gray700}>
          의견 (4)
        </Text>
        <style.SortSection>
          <Text
            className="sortOption"
            fontStyleName="body3"
            color={
              sortMethod === '최신순'
                ? COLORS.grayscale.gray500
                : COLORS.grayscale.gray200
            }
            onClick={() => setSortMethod('최신순')}
          >
            최신순
          </Text>
          <Text
            className="sortOption"
            fontStyleName="body3"
            color={
              sortMethod === '공감순'
                ? COLORS.grayscale.gray500
                : COLORS.grayscale.gray200
            }
            onClick={() => setSortMethod('공감순')}
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

export default CommentSection;
