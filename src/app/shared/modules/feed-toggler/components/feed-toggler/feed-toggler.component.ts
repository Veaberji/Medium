import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'med-feed-toggler',
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input() tag: string | null = null;
  isLoggedIn$!: Observable<boolean | null>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initValues();
  }

  private initValues() {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
  }
}
