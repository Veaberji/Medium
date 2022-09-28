import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import GetPopularTagsResponse from '../models/get-popular-tags-response';

@Injectable()
export class PopularTagsService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<string[]> {
    const url = `${this.baseUrl}/tags`;

    return this.http
      .get<GetPopularTagsResponse>(url)
      .pipe(map((response: GetPopularTagsResponse) => response.tags));
  }
}
