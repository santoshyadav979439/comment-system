const initialState = {
  openReply: false,
  commentSystem: [],
  commentId: 0,
  openId: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addComment":
      const newState = {
        ...state,
        commentSystem: [
          ...state.commentSystem,
          {
            ...action.payload,
            id: state.commentId + 1
          }
        ],
        commentId: state.commentId + 1
      };
      return newState;
    case "openReply":
      return {
        ...state,
        commentSystem: state.commentSystem.map((el) => {
          const newEl = { ...el };
          if (newEl.id === action.payload) newEl.openReply = true;

          return newEl;
        })
      };
    case "closeReply":
      return {
        ...state,
        commentSystem: state.commentSystem.map((el) => {
          const newEl = { ...el };
          newEl.openReply = false;
          return newEl;
        })
      };
    default:
      return state;
  }
};

export default reducer;
