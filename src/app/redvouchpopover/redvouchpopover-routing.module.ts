import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedvouchpopoverPage } from './redvouchpopover.page';

const routes: Routes = [
  {
    path: '',
    component: RedvouchpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedvouchpopoverPageRoutingModule {}
