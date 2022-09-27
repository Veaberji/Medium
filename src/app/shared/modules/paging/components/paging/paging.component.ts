import { Component, Input, OnInit } from '@angular/core';
import { ArrayUtilsService } from 'src/app/shared/services/utils/array-utils.service';

@Component({
  selector: 'med-paging',
  templateUrl: './paging.component.html',
})
export class PagingComponent implements OnInit {
  @Input() total!: number;
  @Input() limit!: number;
  @Input() url!: string;
  @Input() currentPage!: number;
  pagesCount!: number;
  pages!: number[];
  queryParams!: string[];

  constructor(private arrayService: ArrayUtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.arrayService.range(1, this.pagesCount);
  }
}
