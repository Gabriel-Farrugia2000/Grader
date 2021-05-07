import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherOffersPage } from './voucher-offers.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherOffersPageRoutingModule {}
