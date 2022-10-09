import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from '../actions/update-article.action';
import { EditArticleService } from '../../services/edit-article.service';
import Article from 'src/app/shared/models/article';

@Injectable()
export default class UpdateArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: EditArticleService,
    private router: Router
  ) {}

  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, input }) =>
        this.articleService.updateArticle(slug, input).pipe(
          map((article: Article) => updateArticleSuccessAction({ article })),
          catchError((response: HttpErrorResponse) =>
            of(updateArticleFailureAction({ errors: response.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug]))
      ),
    { dispatch: false }
  );
}
