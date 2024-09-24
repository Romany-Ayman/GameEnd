import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from '../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);

  setRegisterForm(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.beseUrlAu}signup`, data);
  }
  setloginForm(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.beseUrlAu}signin`, data);
  }
}
