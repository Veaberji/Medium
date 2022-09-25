import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AuthState from './auth/models/auth-state';
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
