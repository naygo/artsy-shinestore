import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/services/user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401].includes(err.status) && this.userService.isLogged()) {
                this.userService.logout();
                //this.alertService.warning('Sessão expirada, entre novamente para acessar os recursos!', true);
                setTimeout(() => this.router.navigate(['']), 2000);
            }
            
            const error = (err && err.error && err.error.message) || err.statusText;
            return throwError(error);
        }))
    }
}