import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Article from '../models/article';
import GetArticleResponse from '../models/getArticleResponse';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getArticle(title: string): Observable<Article> {
    const url = `${this.baseUrl}/articles/${title}`;
    return this.http
      .get<GetArticleResponse>(url)
      .pipe(map((response) => response.article));
  }
}
