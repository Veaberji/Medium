import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AuthState from '../../models/auth-state';
import { errorsSelector, isSubmittingSelector } from '../../store/selectors';
import { loginAction } from '../../store/actions/login.action';
import BackendErrors from 'src/app/shared/models/backendErrors';
import LoginRequest from '../../models/loginRequest';

@Component({
  selector: 'med-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isSubmitting$: Observable<boolean> = new Observable();
  errors$: Observable<BackendErrors | null> = new Observable();

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  onSubmit(): void {
    console.log('Submitted', this.form.value);
    const request: LoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }
}
