import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../Posts/state/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]>{
    return this.http
    .get<Post[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
    .pipe(
      map((data) => {
        const posts: Post[] = [];
        for (let key in data) {
          posts.push({ ...data[key], id: key });
        }
        return posts;
      })
    );
  }
}
