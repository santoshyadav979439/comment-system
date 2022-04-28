import "./styles.css";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import CommentBox from "./CommentBox";

export default function App() {
  const commentSystem = useSelector((state) => state.commentSystem);
  console.log(commentSystem);
  return (
    <div className="App">
      <div className="top-bar">
        <CommentBox />
      </div>
      <div className="comment-container">
        {commentSystem.map((el, index) => {
          return (
            <Comment
              id={el.id}
              body={el.body}
              name={el.name}
              key={el.id}
              isOpen={el.openReply}
            />
          );
        })}
      </div>
    </div>
  );
}
/***
 *        root= {
 *        author:"santosh",
 *        post:"Santosh Post"
 *        comments:[{
 *      name:"puru",
 *      post:"puru post",
 *      comments:[{
 * }]
 * }]
 * }
 *
 *
 *
 *
 *
 *
 *  */
