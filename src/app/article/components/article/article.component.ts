import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import Article from 'src/app/shared/models/article';
import ArticleState from '../../models/articleState';
import { getArticleAction } from '../../store/actions/getArticle.action';
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
  private title!: string;
  isLoading$!: Observable<boolean>;
  article$!: Observable<Article | null>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchFeed();
  }

  private initValues(): void {
    this.title = this.route.snapshot.paramMap.get('title') ?? '';

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
    this.store.dispatch(getArticleAction({ title: this.title }));
  }
}
