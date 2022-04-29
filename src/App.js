import './styles.css';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import CommentBox from './CommentBox';

export default function App() {
  const commentSystem = useSelector((state) => state.commentSystem);
  const list = [];
  function showComments(commentSystem, addTab) {
    for (let i = 0; i < commentSystem.length; i++) {
      const el = commentSystem[i];
      list.push(
        addTab ? (
          <Comment
            id={el.id}
            body={el.body}
            name={el.name}
            key={el.id}
            isOpen={el.openReply}
            addTab
          />
        ) : (
          <Comment
            id={el.id}
            body={el.body}
            name={el.name}
            key={el.id}
            isOpen={el.openReply}
          />
        )
      );
      if (el.commentSystem && el.commentSystem.length) {
        showComments(el.commentSystem, true);
      }
    }
  }
  showComments(commentSystem);

  return (
    <div className='App'>
      <div className='top-bar'>
        <CommentBox />
      </div>
      <div className='comment-container'>{list}</div>
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
