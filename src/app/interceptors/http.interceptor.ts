import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
 req = req.clone(
  {
    headers: req.headers.append('Content-Type','application/json')
  }
 );
 console.log(req)
  return next(req);
};
