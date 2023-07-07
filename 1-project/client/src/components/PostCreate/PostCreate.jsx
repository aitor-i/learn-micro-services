import axios from "axios";
import React, { useState } from "react";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/posts", { title });
  };

  return (
    <div className="flex flex-col gap-3 mb-5 ">
      <h1 className="text-4xl font-bold ">Create new Post</h1>
      <form className="flex gap-7 items-end" onSubmit={submitHandler}>
        <section className="flex flex-col gap-2">
          <label>Title</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
          />
        </section>
        <button className="m-0" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
