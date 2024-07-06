import { Component, inject } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { PostService } from '../services/post.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedResponse } from '../dtos/FeedResponse';
import { take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private postService = inject(PostService);
  private route = inject(Router);
  show: boolean = false;
  feed: FeedResponse = {
    feedItems: [],
  };

  ngOnInit(): void {
    this.fetchFeed();
  }

  private fetchFeed() {
    this.postService
      .fetchPosts()
      .pipe(
        tap((data) => {
          this.feed = data;
        }),
        take(1)
      )
      .subscribe((data) => console.log(data));
  }
}
