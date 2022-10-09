import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { parseUrl, stringify } from 'query-string';
import { getFeedAction } from '../../store/actions/get-feed.action';
import GetFeedResponse from '../../models/get-feed-response';
import {
  errorsSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors';

@Component({
  selector: 'med-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit, OnChanges {
  readonly limit: number = 10;
  baseUrl!: string;
  currentPage!: number;
  isLoading$!: Observable<boolean>;
  feed$!: Observable<GetFeedResponse | null>;
  error$!: Observable<string | null>;
  @Input() apiUrl!: string;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['apiUrl'] && !changes['apiUrl'].firstChange) {
      this.fetchFeed();
    }
  }

  private initValues(): void {
    this.baseUrl = this.router.url.split('?')[0];

    this.route.queryParams.subscribe((p) => {
      this.currentPage = +p['page'] || 1;
      this.fetchFeed();
    });

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorsSelector));
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);

    const query = stringify({ limit: this.limit, offset, ...parsedUrl.query });
    const url = `${parsedUrl.url}?${query}`;
    this.store.dispatch(getFeedAction({ url }));
  }
}
