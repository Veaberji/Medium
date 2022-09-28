import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPopularTagsAction } from '../../store/actions/get-popular-tags.action';
import PopularTagsState from './../../models/popular-tags-state';
import { Observable } from 'rxjs';
import { errorsSelector, isLoadingSelector } from '../../store/selectors';
import { popularTagsSelector } from './../../store/selectors';

@Component({
  selector: 'med-popular-tags',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  popularTags$!: Observable<string[] | null>;
  error$!: Observable<string | null>;

  constructor(private store: Store<PopularTagsState>) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchFeed();
  }

  private initValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.popularTags$ = this.store.select(popularTagsSelector);
    this.error$ = this.store.select(errorsSelector);
  }

  private fetchFeed(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
