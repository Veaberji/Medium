import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import CurrentUser from 'src/app/shared/models/currentUser';
import { environment } from 'src/environments/environment';
import RegisterRequest from '../models/registerRequest';
import AuthResponse from './../models/authResponse';

@Injectable()
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = `${this.baseUrl}/users`;

    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user));
  }
}
