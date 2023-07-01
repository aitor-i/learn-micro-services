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
          <div className="card" key={post.id}>
            <h2 className="">{post.title}</h2>
            <CommentCreate id={post.id} />
            {comments && <CommentList comments={comments} />}
          </div>
        );
      })}
    </div>
  );
};
