import { Injectable, IterableDiffers, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../dtos/Usuario';
import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../dtos/IToken';
import { catchError, take, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

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

  register(usuario: Usuario) {
    this.http
     .post<Usuario>('/api/users', usuario)
     .pipe(
        tap(() => {
          this.alertService.showSuccess('Cadastro realizado com sucesso');
          this.router.navigate(['/login']);
        }),
        take(1),
        catchError((error) => {
          if(error.error){
            if(error.error instanceof IterableDiffers){
              for(const element of error.error){
                this.alertService.showDanger(`Erro no campo: ${element.field} ${element.message}`);
              }
            }
            this.alertService.showDanger(`${error.error}`);
            console.log(error.error)
          }
          return EMPTY;
        })
      )
     .subscribe();
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
