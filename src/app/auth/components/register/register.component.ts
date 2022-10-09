import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.action';
import { errorsSelector, isSubmittingSelector } from '../../store/selectors';
import RegisterRequest from '../../models/register-request';
import BackendErrors from 'src/app/shared/models/backend-errors';

@Component({
  selector: 'med-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isSubmitting$: Observable<boolean> = new Observable();
  errors$: Observable<BackendErrors | null> = new Observable();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  onSubmit(): void {
    console.log('Submitted', this.form.value);
    const request: RegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  private initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }
}
