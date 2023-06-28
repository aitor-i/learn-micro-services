import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCreate } from "./CommentCreate/CommentCreate";
import { CommentList } from "./CommentList/CommentList";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(Object.values(res.data));
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap  " style={{ gap: "1rem" }}>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <CommentCreate id={post.id} />
          <CommentList id={post.id} />
        </div>
      ))}
    </div>
  );
};
