import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ArticleInput from 'src/app/shared/models/article-input';
import SaveArticleResponse from 'src/app/shared/models/save-article-response';
import Article from 'src/app/shared/models/article';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug: string, input: ArticleInput): Observable<Article> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .put<SaveArticleResponse>(url, { article: input })
      .pipe(map((response: SaveArticleResponse) => response.article));
  }
}
