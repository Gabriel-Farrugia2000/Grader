import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyObjectivePopoverPage } from './easy-objective-popover.page';

const routes: Routes = [
  {
    path: '',
    component: EasyObjectivePopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyObjectivePopoverPageRoutingModule {}
