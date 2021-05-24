import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../../shared/services/user.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) {}

        canActivate(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            if (this.userService.isLogged()) {
                const type = this.userService.getTypeProfile().toLowerCase();
                this.router.navigate([type]);
                return false;
            }
            return true;
        }
}
