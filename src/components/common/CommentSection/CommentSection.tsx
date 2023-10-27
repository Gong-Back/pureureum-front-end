import type { PropsWithChildren } from "react";

import { CommentContextProvider } from "@/stores/context/comment";

import CommentWrapper from "./Wrapper";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";

interface CommentSectionProps {
  className?: string;
}

const CommentSection = ({ className, children }: PropsWithChildren<CommentSectionProps>) => (
  <CommentContextProvider>
    <CommentWrapper className={className}>
      {children}
    </CommentWrapper>
  </CommentContextProvider>
);

CommentSection.Comment = Comment;
CommentSection.Reply = ReplyComment;

export default CommentSection;
