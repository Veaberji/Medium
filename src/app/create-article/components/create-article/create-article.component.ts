import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector, errorsSelector } from '../../store/selectors';
import { createArticleAction } from './../../store/actions/create-article.action';
import ArticleInput from 'src/app/shared/models/article-input';
import BackendErrors from 'src/app/shared/models/backend-errors';

@Component({
  selector: 'med-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent implements OnInit {
  isSubmitting$!: Observable<boolean>;
  errors$!: Observable<BackendErrors | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }

  onSubmit(input: ArticleInput): void {
    this.store.dispatch(createArticleAction({ input }));
  }
}
