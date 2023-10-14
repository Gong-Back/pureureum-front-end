export type CommentType = {
  nickname: string;
  content: string;
  writtenDate: string;
  approved: number;
  denied: number;
  replyAmount: number;
  replyList: ReplyCommentType[];
};

export type ReplyCommentType = Pick<
  CommentType,
  'nickname' | 'content' | 'writtenDate'
>;
