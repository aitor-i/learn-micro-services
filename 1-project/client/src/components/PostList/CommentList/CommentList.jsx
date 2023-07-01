export const CommentList = ({ comments }) => {
  console.log("comments", comments);
  return (
    <div>
      <h5>Comments:</h5>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};
