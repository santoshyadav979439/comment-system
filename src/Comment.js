import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentBox from "./CommentBox";
const Comment = ({ body, name, id, isOpen }) => {
  //const openReply = useSelector((state) => state.openReply);
  const dispatch = useDispatch();
  //console.log("id is", id);
  const onClickListener = (event, id) => {
    console.log("id is", id);
    dispatch({ type: "openReply", payload: id });
  };
  // const commentId = useSelector((state) => state.commentId);
  return (
    <div className="Comment">
      <AccountCircleIcon />
      <div className="name-comment">
        <div className="my-name">{name}</div>
        <div>{body}</div>
        <div style={{ fontSize: "10px", cursor: "pointer" }}>
          <i onClick={(event) => onClickListener(event, id)}>reply</i>
        </div>
        {isOpen ? <CommentBox id={id} /> : null}
      </div>
    </div>
  );
};
export default Comment;
