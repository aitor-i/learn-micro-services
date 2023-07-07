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
      className="bg-slate-50 "
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <h1 className="p-3 mb-4  font-bold text-slate-50 - bg-green-400 w-full m-0 text- ">
        Big iron post
      </h1>
      <div className="p-3 flex flex-col gap-3">
        <PostCreate />
        <PostList posts={posts} />
      </div>
      {/* <dialog id="dialog" className="absolute top-14 p-9 rounded-md " open>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog> */}
    </div>
  );
};
