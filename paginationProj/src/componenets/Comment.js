import "./Comment.css";
function Comment(props) {
  return (
    <div className="commentContainer">
      <b>User{props.id}</b>
      <p>{props.body}</p>
      <div className="commentInfo">
        <p>{props.email}</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Comment;
