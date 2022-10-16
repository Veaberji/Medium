import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { getUserProfileAction } from '../../store/actions/get-user-profile.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import {
  errorsSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors';
import CurrentUser from 'src/app/shared/models/current-user';
import Profile from 'src/app/shared/models/profile';

@Component({
  selector: 'med-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile!: Profile;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  userProfileSubscription!: Subscription;
  routeSubscription!: Subscription;
  slug!: string;
  isCurrentUserProfile$!: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  get apiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }

  private initValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorsSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(([currentUser, profile]: [CurrentUser, Profile]) => {
        return currentUser.username === profile.username;
      })
    );
  }

  private initListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector), filter(Boolean))
      .subscribe((profile: Profile) => {
        this.userProfile = profile;
      });

    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  private fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }
}
