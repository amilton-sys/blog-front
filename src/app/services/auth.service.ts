import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../dtos/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthenticated: boolean = false;
  constructor(private router: Router) {}

  get useAuthentication(): boolean {
    return this.userAuthenticated;
  }

  login(usuario: Usuario): void {
    console.log(usuario);
    if (usuario.email === 'admin@admin.com' && usuario.password === '321Qa!') {
      this.userAuthenticated = true;
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
      this.userAuthenticated = false;
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.userAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
