import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/get-user-profile.action';
import { UserProfileService } from '../../services/user-profile.service';
import Profile from 'src/app/shared/models/profile';

@Injectable()
export default class GetUserProfileEffect {
  constructor(
    private actions$: Actions,
    private profileService: UserProfileService
  ) {}

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) =>
        this.profileService.getUserProfile(slug).pipe(
          map((profile: Profile) => getUserProfileSuccessAction({ profile })),
          catchError(() => of(getUserProfileFailureAction()))
        )
      )
    )
  );
}
