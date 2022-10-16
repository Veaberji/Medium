import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import Article from 'src/app/shared/models/article';
import { deleteArticleAction } from '../../store/actions/delete-article.action';
import { getArticleAction } from '../../store/actions/get-article.action';
import {
  articleSelector,
  errorsSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'med-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  private slug!: string;
  isLoading$!: Observable<boolean>;
  article$!: Observable<Article | null>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchFeed();
  }

  onDeleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }

  private initValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.article$ = this.store.pipe(select(articleSelector));
    this.error$ = this.store.pipe(select(errorsSelector));
    this.isAuthor$ = combineLatest([
      this.article$,
      this.store.select(currentUserSelector),
    ]).pipe(
      switchMap(([article, user]) =>
        of(!!article && !!user && article.author.username === user.username)
      )
    );
  }

  private fetchFeed(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
