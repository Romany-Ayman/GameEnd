import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('games')) {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    });
  }

  return next(req);
};
