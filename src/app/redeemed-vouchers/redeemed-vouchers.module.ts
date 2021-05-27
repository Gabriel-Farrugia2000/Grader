import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemedVouchersPageRoutingModule } from './redeemed-vouchers-routing.module';

import { RedeemedVouchersPage } from './redeemed-vouchers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemedVouchersPageRoutingModule
  ],
  declarations: [RedeemedVouchersPage]
})
export class RedeemedVouchersPageModule {}
