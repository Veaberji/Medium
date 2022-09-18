import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import CurrentUser from 'src/app/shared/models/currentUser';

@Injectable()
export default class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((response: HttpErrorResponse) =>
            of(registerFailureAction({ errors: response.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );
}
