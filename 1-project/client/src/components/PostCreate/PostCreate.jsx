import axios from "axios";
import React, { useState } from "react";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/posts", { title });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Create new Post</h1>
      <form onSubmit={submitHandler}>
        <section>
          <label>Title</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
