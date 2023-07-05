import React from "react";

import { CommentCreate } from "./CommentCreate/CommentCreate";
import { CommentList } from "./CommentList/CommentList";

export const PostList = ({ posts }) => {
  return (
    <div className="flex flex-wrap  " style={{ gap: "1rem" }}>
      {posts?.map((post) => {
        const comments = post.comments;

        console.log("comments", comments);

        return (
          <div className="card w-80 " key={post.id}>
            <h2 className="">{post.title}</h2>
            <div className="flex flex-col gap-3">
              {comments && <CommentList comments={comments} />}
              <CommentCreate id={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
