import { Action, createReducer, on } from "@ngrx/store";
import { loadPostsSuccess } from "./post.action";
import { PostsState, initialState } from "./post.state";

const _postsReducer = createReducer(initialState,
    on(loadPostsSuccess, (state, action) => {
      console.log("aaaaaaaaaaaaaa")
        return {
          ...state,
          posts: action.posts,
        };
      })
    )

export function postsReducer(state:any,action:Action) {
    return _postsReducer(state, action);
  }