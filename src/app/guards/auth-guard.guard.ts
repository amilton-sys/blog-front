import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanMatchFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = localStorage.getItem('access_token');

  if (token) {
    auth.userAuthenticated = true;
    return true;
  }
  auth.userAuthenticated = false;

  router.navigate(['/login']);
  return false;
};
