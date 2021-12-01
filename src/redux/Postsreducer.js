const actionNewPost = "NEW-POST";
const actionChangeNewPost = "CHANGE-POST";

const postsReducer = (state, action) => {
    switch (action.type) {
        case actionNewPost:
            let textPost = { content: state.firstPost, };
            state.posts.push(textPost);
            state.firstPost = "";
            return state;
        case actionChangeNewPost:
            state.firstPost = action.text;
            return state;
        default:
            return state;
    }
};

export default postsReducer;

export const newPostAction = () => {
    return { type: actionNewPost }
};
export const newPostChangeAction = (text) => {
    return { type: actionChangeNewPost, text: text, }
};