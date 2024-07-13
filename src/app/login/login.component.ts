import { Usuario } from '../dtos/Usuario';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ErrorMsgComponent } from '../shared/error-msg/error-msg.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorMsgComponent, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private usuario = new Usuario();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]{3,}@[a-z0-9.-]{3,}\\.[a-z]{2,4}$'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern(
          '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,8}$'
        ),
      ],
    ],
  });

  validateTouched(campo: string) {
    return !!(!this.form.get(campo)?.valid && this.form.get(campo)?.touched);
  }

  validateEmail() {
    let emailField = this.form.get('email');
    if (emailField?.errors) {
      return emailField.errors['email'];
    }
  }

  signIn() {
    this.usuario = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    this.authService.login(this.usuario);
  }

  aplicarCss(campo: string) {
    return {
      'is-invalid': this.validateTouched(campo),
      'is-valid': this.form.get(campo)?.valid,
    };
  }
}
