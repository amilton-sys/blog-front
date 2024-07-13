import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../dtos/Usuario';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private auth = inject(AuthService);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.register(this.form.value);
      console.log(this.form.value);
      this.form.reset();
    }
  }

  register(usuario: Usuario) {
    this.auth.register(usuario);
  }
}
