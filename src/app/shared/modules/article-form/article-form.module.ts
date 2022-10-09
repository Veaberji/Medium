import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../backend-error-messages/backend-error-messages.module';
import { ArticleFormComponent } from './components/article-form/article-form.component';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
