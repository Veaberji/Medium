import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import GetFeedResponse from '../models/getFeedResponse';

@Injectable()
export class FeedService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFeed(query: string): Observable<GetFeedResponse> {
    const url = `${this.baseUrl}${query}`;
    return this.http.get<GetFeedResponse>(url);
  }
}
