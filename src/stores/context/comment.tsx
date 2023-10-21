import {
  type PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from 'react';

import {
  CommentModeType,
  CommentSortType,
} from '@/constants/types/commentTypes';

interface CommentContextValueType {
  sortMethod: CommentSortType;
  commentMode: CommentModeType;
  selectedCommentId: number | null;
}

interface CommentContextActionType {
  // eslint-disable-next-line no-unused-vars
  toggleSortMethod: (sortMethod: CommentSortType) => void;
  // eslint-disable-next-line no-unused-vars
  selectRepliedComment: (commentId: number) => void;
  unsetRepliedComment: () => void;
}

export const CommentValueContext = createContext<CommentContextValueType>({
  sortMethod: 'POPULAR',
  commentMode: 'COMMENT',
  selectedCommentId: null,
});

export const CommentActionContext = createContext<CommentContextActionType>(
  {} as CommentContextActionType,
);

export const CommentContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [sortMethod, setSortMethod] = useState<CommentSortType>('POPULAR');
  const [commentMode, setCommentMode] = useState<CommentModeType>('COMMENT');
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null,
  );

  const contextValue = useMemo(
    () => ({
      sortMethod,
      commentMode,
      selectedCommentId,
    }),
    [sortMethod, commentMode, selectedCommentId],
  );

  const contextAction = useMemo(
    () => ({
      toggleSortMethod: (selectedSortMethod: CommentSortType) => {
        setSortMethod(selectedSortMethod);
      },
      selectRepliedComment: (commentId: number) => {
        setCommentMode('REPLY');
        setSelectedCommentId(commentId);
      },
      unsetRepliedComment: () => {
        setCommentMode('COMMENT');
        setSelectedCommentId(null);
      },
    }),
    [],
  );

  return (
    <CommentValueContext.Provider value={contextValue}>
      <CommentActionContext.Provider
        value={contextAction}
      >
        {children}
      </CommentActionContext.Provider>
    </CommentValueContext.Provider>
  );
};
