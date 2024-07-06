import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from './services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  linkedin = faLinkedin;
  git = faGithub;
  private auth: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  isAuthenticated(): boolean {
    return this.auth.useAuthentication;
  }

  logout() {
    this.auth.logout();
  }
}
