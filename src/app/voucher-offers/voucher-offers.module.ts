import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherOffersPageRoutingModule } from './voucher-offers-routing.module';

import { VoucherOffersPage } from './voucher-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherOffersPageRoutingModule
  ],
  declarations: [VoucherOffersPage]
})
export class VoucherOffersPageModule {}
