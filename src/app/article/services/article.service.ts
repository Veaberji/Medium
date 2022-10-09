import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArticleService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const url = `${this.baseUrl}/articles/${slug}`;
    return this.http.delete<{}>(url);
  }
}
