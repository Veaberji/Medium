import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import RegisterEffect from './store/effects/register.effect';
import LoginEffect from './store/effects/login.effect';
import GetCurrentUserEffect from './store/effects/getCurrentUser.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backend-error-messages.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  exports: [RegisterComponent, LoginComponent],
  providers: [AuthService],
})
export class AuthModule {}
