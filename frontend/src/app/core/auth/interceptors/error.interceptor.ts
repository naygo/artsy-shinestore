import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/services/user.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private userService: UserService,
        private router: Router,
        private messageService: MessageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401].includes(err.status) && this.userService.isLogged()) {
                this.userService.logout();
                this.messageService.add({severity:'warn', summary: 'Sessão expirada', detail: 'Faça login novamente para acessar o site'});
                setTimeout(() => this.router.navigate(['']), 2000);
            }

            const error = (err && err.error && err.error.message) || err.statusText;
            return throwError(error);
        }))
    }
}