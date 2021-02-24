import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(API_URL + '/users');
  }
}
