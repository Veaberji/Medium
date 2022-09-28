import { Component } from '@angular/core';

@Component({
  selector: 'med-global-feed',
  templateUrl: './global-feed.component.html',
})
export class GlobalFeedComponent {
  readonly apiUrl = '/articles';
}
