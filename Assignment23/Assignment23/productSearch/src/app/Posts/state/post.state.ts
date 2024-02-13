import { Post } from "./post.model";

export interface PostsState {
    posts: Post[];
  }
  export const initialState: PostsState = {
    posts: [],
  };