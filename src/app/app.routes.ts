import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'login',
  //   loadComponent:() => import('./login/login.component').then(c => c.LoginComponent),
  // },
  {
    path: 'home',
    loadComponent:() => import('./home/home.component').then(c => c.HomeComponent),
    // canActivate: [authGuardGuard]
  }
];
