import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Profile from 'src/app/shared/models/profile';
import GetUserProfileResponse from '../models/get-user-profile-response';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<Profile> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http
      .get<GetUserProfileResponse>(url)
      .pipe(map((response) => response.profile));
  }
}
