import { Component, inject } from '@angular/core';
import { FeedItem } from '../../dtos/FeedItem';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  private activatedRoute = inject(ActivatedRoute);
  feedItem:FeedItem | undefined;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.feedItem = post;
    }).unsubscribe();
    console.log(this.feedItem);
  }
}
