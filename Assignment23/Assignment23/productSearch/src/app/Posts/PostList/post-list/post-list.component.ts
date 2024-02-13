import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../state/post.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../../state/post.selectors';
import { loadPosts } from '../../state/post.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
       
  posts!: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    console.log(this.posts+"*********************")
    this.store.dispatch(loadPosts());
  }
}
