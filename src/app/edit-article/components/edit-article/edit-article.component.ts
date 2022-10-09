import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  isSubmittingSelector,
  errorsSelector,
  isLoadingSelector,
  articleSelector,
} from '../../store/selectors';
import { updateArticleAction } from '../../store/actions/update-article.action';
import { getArticleAction } from '../../store/actions/get-article.action';
import ArticleInput from 'src/app/shared/models/article-input';
import BackendErrors from 'src/app/shared/models/backend-errors';

@Component({
  selector: 'med-edit-article',
  templateUrl: './edit-article.component.html',
})
export class EditArticleComponent implements OnInit {
  isSubmitting$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  initialValues$!: Observable<ArticleInput>;
  errors$!: Observable<BackendErrors | null>;
  slug!: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  onSubmit(input: ArticleInput): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, input }));
  }

  private initValues() {
    this.slug = this.route.snapshot.params['slug'];
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article) => ({
        body: article.body,
        description: article.description,
        tagList: article.tagList,
        title: article.title,
      }))
    );
    this.errors$ = this.store.pipe(select(errorsSelector));
  }

  private fetchData() {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
