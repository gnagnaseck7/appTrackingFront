import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTestParentPage } from './page-test-parent.page';

const routes: Routes = [
  {
    path: '',
    component: PageTestParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTestParentPageRoutingModule {}
