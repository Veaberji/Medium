import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/add-to-favorites.action';
import { AddToFavoritesService } from '../../services/add-to-favorites.service';
import Article from 'src/app/shared/models/article';

@Injectable()
export default class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) {}

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeToFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug);
        return article$.pipe(
          map((article: Article) => addToFavoritesSuccessAction({ article })),
          catchError(() => of(addToFavoritesFailureAction()))
        );
      })
    )
  );
}
