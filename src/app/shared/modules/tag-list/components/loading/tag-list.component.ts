import { Component, Input } from '@angular/core';

@Component({
  selector: 'med-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags!: string[];
}
