import React, { useState, useEffect } from "react";
import axios from "axios";

import { PostCreate } from "./components/PostCreate/PostCreate";
import { PostList } from "./components/PostList/PostList";

export const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    //const res = await axios.get("http://localhost:4000/posts");
    const res = await axios
      .get("http://localhost:4003/posts")
      .catch((error) => console.log(error));
    setPosts(Object.values(res?.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div
      className="bg-gradient-to-r from-purple-500 to-pink-500"
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      <PostCreate />
      <PostList posts={posts} />
    </div>
  );
};
