export type CommentType = {
  commentId: number;
  nickname: string;
  content: string;
  writtenDate: string;
  approved: number;
  denied: number;
  replyAmount: number;
};

export type ReplyCommentType = Pick<
  CommentType,
  'nickname' | 'content' | 'writtenDate'
>;

export type CommentSortType = 'POPULAR' | 'LATEST';
export type CommentModeType = 'COMMENT' | 'REPLY';