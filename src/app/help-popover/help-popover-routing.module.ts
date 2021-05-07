import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPopoverPage } from './help-popover.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPopoverPageRoutingModule {}
