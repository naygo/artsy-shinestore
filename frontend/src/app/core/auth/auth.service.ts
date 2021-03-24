import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { tap } from 'rxjs/operators';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(email: string, password: string) {
    return this.http
    .post(API_URL + '/login', { email, password }, { observe: 'response' })
    .pipe(tap(res => {
      //const token = res.body.token;
    }))
  }
}
