import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import CreateArticleEffect from './store/effects/create-article.effect';
import { reducers } from './store/reducers';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleComponent } from './components/create-article/create-article.component';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
