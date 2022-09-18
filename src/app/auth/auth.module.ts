import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/reducers';
import RegisterEffect from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/models/modules/backendErrorMessages/backend-error-messages.module';
import { AuthService } from './services/auth.service';
import { PersistanceService } from '../shared/services/persistance.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  exports: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
