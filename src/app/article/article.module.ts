import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import GetArticleEffect from './store/effects/get-article.effect';
import DeleteArticleEffect from './store/effects/delete-article..effect';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleRoutingModule } from './article-routing.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  providers: [ArticleService],
  exports: [ArticleComponent],
})
export class ArticleModule {}
