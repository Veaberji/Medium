import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/create-article.action';
import { CreateArticleService } from '../../services/create-article.service';
import Article from 'src/app/shared/models/article';

@Injectable()
export default class CreateArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: CreateArticleService,
    private router: Router
  ) {}

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ input }) =>
        this.articleService.createArticle(input).pipe(
          map((article: Article) => createArticleSuccessAction({ article })),
          catchError((response: HttpErrorResponse) =>
            of(createArticleFailureAction({ errors: response.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug]))
      ),
    { dispatch: false }
  );
}
