import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user: User = this.authService.getUser();
    if (user) {
      const cloned = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer' + user.auth_token)
          .set('Cache-Control', 'no-cache')
          .set('Pragma', 'no-cache')
          .set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')
          .set('If-Modified-Since', '0'),
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
