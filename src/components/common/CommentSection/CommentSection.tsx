import type { PropsWithChildren } from "react";

import { CommentContextProvider } from "@/stores/context/comment";

import CommentWrapper from "./Wrapper";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";

const CommentSection = ({ children }: PropsWithChildren) => (
  <CommentContextProvider>
    <CommentWrapper>
      {children}
    </CommentWrapper>
  </CommentContextProvider>
);

CommentSection.Comment = Comment;
CommentSection.Reply = ReplyComment;

export default CommentSection;
