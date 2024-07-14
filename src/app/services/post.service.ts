import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedResponse } from '../dtos/FeedResponse';
import { FeedItem } from '../dtos/FeedItem';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  constructor() {}

  fetchPosts() {
    return this.http
      .get<FeedResponse>('/api/posts', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
  }

  fetchPostById(id: number) {
    return this.http
     .get<FeedItem>(`/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }).pipe(take(1));
  }

  addFeedItem(feedItem: FeedItem) {
    return this.http
     .post('/api/posts', feedItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }).pipe(take(1));
  }

}
