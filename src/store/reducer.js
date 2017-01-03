import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { READ_POSTS, INITIALIZE_POSTS } from './action';

const INITIAL_STATE = { data: {}, page: 1, userId: null };

const PostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case READ_POSTS:
      const postsData = {};
      action.payload.data.map(post => (postsData[post.id] = post));
      return {
        data: { ...state.data, ...postsData },
        page: action.meta._page,
        userId: action.meta.userId,
      };
    case INITIALIZE_POSTS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

const RootReducer = combineReducers({
  post: PostReducer,
  form: FormReducer,
});

export default RootReducer;
