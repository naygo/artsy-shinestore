import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt from 'jwt-decode';

import { User } from '../interfaces/User';
import { AuthService } from '../../core/auth/auth.service';
import { TokenService } from '../../core/token/token.service';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  private decode() {
    const token = this.tokenService.getToken();
    const user = jwt(token) as User;
  }

  getToken() {

  }

  setToken(token: string) {

  }

  register(name: string, email:string, password: string) {
    return this.http.post(API_URL + '/users', { name, email, password });
  }

  login(email: string, password: string) {
    return this.http.post(API_URL + '/login', { email, password });
  }

  getUser(id: string) {
    return this.http.get(API_URL + `/users/${ id }`);
  }

  getAllUsers() {
    return this.http.get(API_URL + '/users');
  }
}
''
