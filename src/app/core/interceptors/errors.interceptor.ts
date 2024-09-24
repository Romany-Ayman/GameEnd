import { HttpInterceptorFn } from '@angular/common/http';
import { log } from 'console';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      console.log('interceptors', err);

      return throwError(() => err);
    })
  );
};
