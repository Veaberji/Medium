import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/get-feed.action';
import { FeedService } from '../../services/feed.service';
import GetFeedResponse from '../../models/get-feed-response';

@Injectable()
export default class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) =>
        this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponse) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => of(getFeedFailureAction()))
        )
      )
    )
  );
}
