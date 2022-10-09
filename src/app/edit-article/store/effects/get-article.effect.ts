import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/get-article.action';
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
      switchMap(({ slug }) =>
        this.articleService.getArticle(slug).pipe(
          map((article: Article) => getArticleSuccessAction({ article })),
          catchError((response: HttpErrorResponse) =>
            of(getArticleFailureAction({ errors: response.error.errors }))
          )
        )
      )
    )
  );
}
