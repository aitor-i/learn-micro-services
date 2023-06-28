import axios from "axios";
import React, { useEffect, useState } from "react";

export const CommentList = ({ id }) => {
  const [comments, setComments] = useState([]);
  const fetchPosts = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${id}/comments`);
    setComments(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h5>Comments:</h5>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};
