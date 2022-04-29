const initialState = {
  openReply: false,
  commentSystem: [],
  commentId: 0,
  openId: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addComment':
      let newCommentSystem;
      if (state.openId !== '') {
        newCommentSystem = state.commentSystem.map((el) => {
          if (el.id == state.openId) {
            return {
              ...el,
              commentSystem: [{ ...action.payload, id: state.commentId + 1 }],
            };
          }
          return el;
        });
      } else {
        action.payload.id;
        newCommentSystem = [
          ...state.commentSystem,
          {
            ...action.payload,
            id: state.commentId + 1,
          },
        ];
      }
      console.log(newCommentSystem, 'new comment system');
      const newState = {
        ...state,
        commentSystem: newCommentSystem,
        commentId: state.commentId + 1,
        openId: '',
      };
      console.log(newState, 'newState');
      return newState;
    case 'openReply':
      return {
        ...state,
        openId: action.payload,
        commentSystem: state.commentSystem.map((el) => {
          const newEl = { ...el };
          if (newEl.id === action.payload) {
            newEl.openReply = true;
          }

          return newEl;
        }),
      };
    case 'closeReply':
      return {
        ...state,
        commentSystem: state.commentSystem.map((el) => {
          const newEl = { ...el };
          newEl.openReply = false;
          return newEl;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
