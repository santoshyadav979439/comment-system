import { useRef } from "react";
import { useDispatch } from "react-redux";
const CommentBox = (id) => {
  console.log("inside commentbox");
  const dispatch = useDispatch();
  const name = useRef(null);
  const comment = useRef(null);
  const postComment = () => {
    const commentorName = name.current.value;
    const body = comment.current.value;
    dispatch({
      type: "addComment",
      payload: {
        name: commentorName,
        body: body,
        openReply: false
      }
    });
    name.current.value = "";
    comment.current.value = "";
    dispatch({
      type: "closeReply"
    });
  };
  return (
    <div className="comment-box">
      <input
        className="commentor-name"
        type="text"
        placeholder="Enter your name"
        ref={name}
      />
      <input
        ref={comment}
        className="comment-box"
        type="text"
        placeholder="Enter you comment here"
      />
      <button className="comment-button" onClick={postComment}>
        Comment
      </button>
    </div>
  );
};
export default CommentBox;
