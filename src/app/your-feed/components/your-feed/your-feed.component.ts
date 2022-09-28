import { Component } from '@angular/core';

@Component({
  selector: 'med-your-feed',
  templateUrl: './your-feed.component.html',
})
export class YourFeedComponent {
  readonly apiUrl = '/articles/feed';
}
