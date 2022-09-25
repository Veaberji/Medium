import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import CurrentUser from 'src/app/shared/models/currentUser';
import LoginRequest from '../models/loginRequest';
import RegisterRequest from '../models/registerRequest';
import AuthResponse from './../models/authResponse';

@Injectable()
export class AuthService {
  private readonly baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = `${this.baseUrl}/users`;

    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    const url = `${this.baseUrl}/users/login`;

    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser));
  }

  get currentUser$(): Observable<CurrentUser> {
    const url = `${this.baseUrl}/user`;

    return this.http.get<AuthResponse>(url).pipe(map(this.getUser));
  }

  private getUser(response: AuthResponse): CurrentUser {
    return response.user;
  }
}
