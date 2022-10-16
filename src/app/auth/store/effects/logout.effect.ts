import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logoutAction } from '../actions/sync.action';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export default class LogoutEffect {
  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '');
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
