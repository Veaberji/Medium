import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import GetArticleResponse from 'src/app/shared/models/get-article-response';
import Article from 'src/app/shared/models/article';

@Injectable()
export class AddToFavoritesService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<Article> {
    return this.http
      .post<GetArticleResponse>(this.getUrl(slug), {})
      .pipe(map(this.getArticle));
  }

  removeToFavorites(slug: string): Observable<Article> {
    return this.http
      .delete<GetArticleResponse>(this.getUrl(slug))
      .pipe(map(this.getArticle));
  }

  private getUrl(slug: string): string {
    return `${this.baseUrl}/articles/${slug}/favorite`;
  }

  private getArticle(response: GetArticleResponse): Article {
    return response.article;
  }
}
