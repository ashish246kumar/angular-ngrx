import { Injectable } from "@angular/core";
import { PostServiceService } from "../../Services/post.service.service";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { loadPosts, loadPostsSuccess } from "./post.action";
import { map, mergeMap } from "rxjs";

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService:PostServiceService) {}


    loadPosts$ = createEffect(() =>{
        return this.actions$.pipe(
          ofType(loadPosts),
          mergeMap((action) => {
            return this.postsService.getPosts().pipe(
              map((posts) => {
                return loadPostsSuccess({ posts });
              })
            );
          })
        );
      });
      
}