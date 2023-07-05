import React, { useState } from "react";

import axios from "axios";

export const CommentCreate = ({ id }) => {
  const [comment, setComment] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4001/posts/${id}/comments`, {
      content: comment,
    });
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <section className="flex flex-col">
          <label>New comment</label>
          <input
            onChange={(event) => setComment(event.target.value)}
            type="text"
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
