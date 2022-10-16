import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { SettingsRoutingModule } from './settings-routing.module';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
