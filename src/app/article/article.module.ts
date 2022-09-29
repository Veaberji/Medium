import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { reducers } from './store/reducers';
import GetArticleEffect from './store/effects/getArticle.effect';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleRoutingModule } from './article-routing.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  exports: [ArticleComponent],
})
export class ArticleModule {}
