import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';
import { HelpPopoverPage } from '../help-popover/help-popover.page';
import { Voucher } from '../struct/vouchers';
import { VOUCHERS } from '../struct/voucher-data';
import { StorageService } from '../services/storage.service';
import { VouchersService } from '../services/vouchers.service';


@Component({
  selector: 'app-voucher-offers',
  templateUrl: './voucher-offers.page.html',
  styleUrls: ['./voucher-offers.page.scss'],
})
export class VoucherOffersPage {
  points: number = 0;

  // temporary
  vouchers: Voucher[] = [];

  constructor(
    public popoverController: PopoverController,
    private storageService: StorageService,
    private voucherService: VouchersService) {}

  async ionViewWillEnter()
  {
    this.points = await this.storageService.get('points') || 0;
    // true = redeemed vouchers
    this.vouchers = this.voucherService.getVouchers(false);
  }

  async presentPopover(voucher: Voucher) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: { 'voucher': voucher },
      translucent: true
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', data);

    if (data && data.redeem)
    {
      // once voucher is redeemed, update the points in storage
      this.points -= voucher.costPoints;

      // voucher.redeemed = data.redeem;
      this.voucherService.redeem(voucher.id);
      this.vouchers = this.voucherService.getVouchers(false);
      this.storageService.set('points', this.points);
    }
  }
  
  async helpPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HelpPopoverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
