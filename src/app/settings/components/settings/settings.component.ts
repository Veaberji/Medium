import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/update-current-user.action';
import { errorsSelector, isSubmittingSelector } from '../../store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import BackendErrors from 'src/app/shared/models/backend-errors';
import CurrentUser from 'src/app/shared/models/current-user';
import UserInput from 'src/app/shared/models/user-input';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  currentUser!: CurrentUser;
  currentUserSubscription!: Subscription;
  isSubmitting$!: Observable<boolean>;
  errors$!: Observable<BackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  submit(): void {
    const userInput: UserInput = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateCurrentUserAction({ userInput }));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }

  private initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }

  private initListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUser) => {
        this.currentUser = currentUser;
        this.initForm();
      });
  }

  private initForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }
}
