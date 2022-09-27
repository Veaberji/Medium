import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AuthState from 'src/app/auth/models/authState';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors';
import CurrentUser from 'src/app/shared/models/currentUser';

@Component({
  selector: 'med-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUser | null>;

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
