import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopularTagsService } from './../../services/popular-tags.service';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/get-popular-tags.action';

@Injectable()
export default class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private tagService: PopularTagsService
  ) {}

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() =>
        this.tagService.getPopularTags().pipe(
          map((tags: string[]) => getPopularTagsSuccessAction({ tags })),
          catchError(() => of(getPopularTagsFailureAction()))
        )
      )
    )
  );
}
