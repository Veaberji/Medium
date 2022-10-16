import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './create-article/create-article.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { SettingsModule } from './settings/settings.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    StoreRouterConnectingModule.forRoot(),
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
