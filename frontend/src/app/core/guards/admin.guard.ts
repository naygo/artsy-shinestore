import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../../shared/services/user.service';

@Injectable({ providedIn: 'root'})
export class AdminGuard implements CanActivateChild {

    constructor(
        private userService: UserService,
        private router: Router) {}

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            const type = this.userService.getTypeProfile().toLowerCase();

            if (type === 'admin') {
                return true;
            }
            this.router.navigate([type]);
            return false;
    }
}
