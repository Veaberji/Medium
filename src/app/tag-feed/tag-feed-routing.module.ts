import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';

const routes: Routes = [
  {
    path: 'tag/:tagName',
    component: TagFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagFeedRoutingModule {}
