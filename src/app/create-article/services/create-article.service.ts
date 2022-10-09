import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ArticleInput from 'src/app/shared/models/article-input';
import SaveArticleResponse from 'src/app/shared/models/save-article-response';
import Article from 'src/app/shared/models/article';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(input: ArticleInput): Observable<Article> {
    const url = `${environment.apiUrl}/articles/`;

    return this.http
      .post<SaveArticleResponse>(url, { article: input })
      .pipe(map((response: SaveArticleResponse) => response.article));
  }
}
