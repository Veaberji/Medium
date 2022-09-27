import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'med-global-feed',
  templateUrl: './global-feed.component.html',
})
export class GlobalFeedComponent implements OnInit {
  readonly apiUrl = '/articles';
  constructor() {}

  ngOnInit(): void {}
}
