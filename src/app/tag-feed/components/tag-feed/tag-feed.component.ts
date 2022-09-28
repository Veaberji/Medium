import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'med-tag-feed',
  templateUrl: './tag-feed.component.html',
})
export class TagFeedComponent implements OnInit {
  apiUrl!: string;
  tag!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.initValues(params['tagName']));
  }

  private initValues(tag: string): void {
    this.tag = tag;
    this.apiUrl = `/articles?tag=${this.tag}`;
  }
}
