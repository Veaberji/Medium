import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action';
import { ArticleService } from 'src/app/shared/services/article.service';
import Article from 'src/app/shared/models/article';

@Injectable()
export default class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ title }) =>
        this.articleService.getArticle(title).pipe(
          map((article: Article) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => of(getArticleFailureAction()))
        )
      )
    )
  );
}
