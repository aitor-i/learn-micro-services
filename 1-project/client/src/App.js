import React from "react";
import { PostCreate } from "./components/PostCreate/PostCreate";
import { PostList } from "./components/PostList/PostList";

export const App = () => {
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
      <PostList />
    </div>
  );
};
