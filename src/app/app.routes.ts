import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard.guard';
import { postResolverResolver } from '../resolver/post-resolver.resolver';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((c) => c.RegisterComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    canActivate: [authGuardGuard],
  },
  {
    path: 'post/:id',
    loadComponent: () =>
      import('./components/post-detail/post-detail.component').then(
        (c) => c.PostDetailComponent
      ),
    canActivate: [authGuardGuard],
    resolve: {post: postResolverResolver}
  },
];
