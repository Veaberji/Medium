import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import GetUserProfileEffect from './store/effects/get-user-profile.effect';
import { reducers } from './store/reducers';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileService } from './services/user-profile.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
