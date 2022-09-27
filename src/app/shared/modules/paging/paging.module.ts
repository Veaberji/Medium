import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, RouterModule],
  exports: [PagingComponent],
})
export class PagingModule {}
