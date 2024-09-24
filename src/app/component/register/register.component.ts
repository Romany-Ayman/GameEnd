import { Component, OnDestroy, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
  private readonly _SignService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);

  msgError: string = '';
  isLoading: boolean = false;
  cloesRegister!: Subscription;

  registerForm: FormGroup = this._FormBuilder.group({
    first_name: [null, [Validators.required, Validators.minLength(3)]],
    last_name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],

    age: [null, [Validators.required]],
  });

  registerSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.cloesRegister = this._SignService
        .setRegisterForm(this.registerForm.value)
        .subscribe({
          next: (res) => {
            if (res.message == 'success') {
              this._Router.navigate(['/login']);
            } else {
              this.msgError = res.message;
            }
            console.log(res);
            this.isLoading = false;
          },
          error: (err) => {
            this.msgError = err.message;
            console.log(err);
            this.isLoading = false;
          },
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.cloesRegister?.unsubscribe();
  }
}
