import { ActionReducerMap } from "@ngrx/store";
import { postsReducer } from "../Posts/state/post.reducer";
import { PostsState } from "../Posts/state/post.state";
import { ProductState } from "../Product/ProductFilter/state/search.state";
import { productSearchReducer } from "../Product/ProductFilter/state/search.reducer";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";

export interface AppState {
   
    posts: PostsState;
    products:ProductState;
    router:RouterReducerState
  }

  export const appReducer = {
    
    posts: postsReducer,
    products:productSearchReducer,
    router:routerReducer
  };