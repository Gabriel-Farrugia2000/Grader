import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemedVouchersPage } from './redeemed-vouchers.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemedVouchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemedVouchersPageRoutingModule {}
