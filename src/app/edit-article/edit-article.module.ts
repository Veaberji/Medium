import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EditArticleRoutingModule } from './edit-article-routing.module';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import UpdateArticleEffect from './store/effects/update-article.effect';
import GetArticleEffect from './store/effects/get-article.effect';
import { reducers } from './store/reducers';
import { EditArticleService } from './services/edit-article.service';
import { ArticleService } from '../shared/services/article.service';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    EditArticleRoutingModule,
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  providers: [EditArticleService, ArticleService],
})
export class EditArticleModule {}
