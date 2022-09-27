import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { parseUrl, stringify } from 'query-string';
import { getFeedAction } from './../../store/actions/getFeed.action';
import GetFeedResponse from '../../models/getFeedResponse';
import FeedState from './../../models/feedState';
import {
  errorsSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors';

@Component({
  selector: 'med-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  readonly limit: number = 1;
  baseUrl!: string;
  currentPage!: number;
  isLoading$!: Observable<boolean>;
  feed$!: Observable<GetFeedResponse | null>;
  error$!: Observable<string | null>;
  @Input() apiUrl!: string;

  constructor(
    private store: Store<FeedState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues() {
    this.baseUrl = this.router.url.split('?')[0];

    this.route.queryParams.subscribe((p) => {
      this.currentPage = +p['page'] || 1;
      this.fetchFeed();
    });

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorsSelector));
  }

  private fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    console.log(parsedUrl);

    const query = stringify({ limit: this.limit, offset, ...parsedUrl.query });
    const url = `${parsedUrl.url}?${query}`;
    this.store.dispatch(getFeedAction({ url }));
  }
}
