import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
  getCurrentUserAction,
} from '../actions/get-current-user.action';
import { AuthService } from '../../services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import CurrentUser from 'src/app/shared/models/current-user';

@Injectable()
export default class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.currentUser$.pipe(
          map((currentUser: CurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => of(getCurrentUserFailureAction()))
        );
      })
    )
  );
}
