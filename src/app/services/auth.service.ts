import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../dtos/Usuario';
import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../dtos/IToken';
import { catchError, take, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  alertService = inject(AlertService);
  http = inject(HttpClient);
  router = inject(Router);
  userAuthenticated: boolean = false;

  get useAuthentication(): boolean {
    return this.userAuthenticated;
  }

  login(usuario: Usuario) {
    this.http
      .post<IToken>('/api/login', {
        email: usuario.email,
        password: usuario.password,
      })
      .pipe(
        tap((token) => {
          localStorage.setItem('access_token', token.accessToken);
          this.userAuthenticated = true;
          this.router.navigate(['/home']);
        }),
        take(1),
        catchError((error) => {
          this.alertService.showDanger('E-mail ou senha inválidos');
          console.log(error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.userAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
