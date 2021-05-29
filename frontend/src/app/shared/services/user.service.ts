import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt from 'jwt-decode';

import { User } from '../interfaces/User';
import { AuthService } from '../../core/auth/auth.service';
import { TokenService } from '../../core/token/token.service';
import { BehaviorSubject } from 'rxjs';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  // private id: number;
  // private userName: string;
  private typeProfileLogged: string;
  public nameLogged: string;
  public idLogged: number;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    this.tokenService.hasToken() &&
    this.decodeAndNotify();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt(token) as User;

    // this.id = user.id;
    // this.userName = user.name;
    this.typeProfileLogged = user.profile;
    this.nameLogged = user.name;
    this.idLogged = user.id;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);

    this.decodeAndNotify();
  }

  getTypeProfile() {
    return this.typeProfileLogged;
  }

  getUser(id: string) {
    return this.http.get(API_URL + `/users/${ id }`);
  }

  getAllUsers() {
    return this.http.get(API_URL + '/users');
  }

  register(name: string, email:string, password: string, profile_id = 2) {
    return this.http.post(API_URL + `/users/${profile_id}`, { name, email, password });
  }

  login(email: string, password: string) {
    return this.http.post(API_URL + '/login', { email, password });
  }
}
