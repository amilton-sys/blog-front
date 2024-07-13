import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FeedItem } from '../app/dtos/FeedItem';
import { PostService } from '../app/services/post.service';

export const postResolverResolver: ResolveFn<FeedItem> = async (route, state) => {
  const postService = inject(PostService);
  const postId = parseInt(route.paramMap.get('id')!);
  const router = inject(Router);
  try {
    const post = await firstValueFrom(postService.fetchPostById(postId));
    return post;
  } catch {
    return new RedirectCommand(router.parseUrl('/home'));
  }
};
