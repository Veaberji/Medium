import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../actions/update-current-user.action';
import { AuthService } from '../../services/auth.service';
import CurrentUser from 'src/app/shared/models/current-user';

@Injectable()
export default class UpdateCurrentUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ userInput }) => {
        return this.authService.updateCurrentUser(userInput).pipe(
          map((currentUser: CurrentUser) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((response: HttpErrorResponse) =>
            of(
              updateCurrentUserFailureAction({ errors: response.error.errors })
            )
          )
        );
      })
    )
  );
}
