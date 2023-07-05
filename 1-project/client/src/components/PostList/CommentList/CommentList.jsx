export const CommentList = ({ comments }) => {
  console.log("comments", comments);
  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};
