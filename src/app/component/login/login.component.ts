import { Component, OnDestroy, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SignService } from '../../core/services/sign.service';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private readonly _SignService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);

  msgError: string = '';
  isLoading: boolean = false;
  cloeslogin!: Subscription;

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });

  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.cloeslogin = this._SignService
        .setloginForm(this.loginForm.value)
        .subscribe({
          next: (res) => {
            if (res.message == 'success') {
              localStorage.setItem('uesrName', res.token);
              this._Router.navigate(['/home']);
            } else {
              this.msgError = res.message;
            }
            console.log(res);
            this.isLoading = false;
          },
          error: (err) => {
            this.msgError = err.message;
            console.log(err.message);
            this.isLoading = false;
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.cloeslogin?.unsubscribe();
  }
}
