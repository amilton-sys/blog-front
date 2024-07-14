import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedResponse } from '../dtos/FeedResponse';
import { FeedItem } from '../dtos/FeedItem';
import { take } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  url = environment.API;
  constructor() {}

  fetchPosts() {
    return this.http
      .get<FeedResponse>(`${this.url}/posts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
  }

  fetchPostById(id: number) {
    return this.http
     .get<FeedItem>(`${this.url}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }).pipe(take(1));
  }

  addFeedItem(feedItem: FeedItem) {
    return this.http
     .post(`${this.url}/posts`, feedItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }).pipe(take(1));
  }

}
