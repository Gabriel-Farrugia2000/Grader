import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HelpPopoverPage } from '../help-popover/help-popover.page';
import { RedvouchpopoverPage } from '../redvouchpopover/redvouchpopover.page';
import { StorageService } from '../services/storage.service';
import { VouchersService } from '../services/vouchers.service';
import { VOUCHERS } from '../struct/voucher-data';
import { Voucher } from '../struct/vouchers';

@Component({
  selector: 'app-redeemed-vouchers',
  templateUrl: './redeemed-vouchers.page.html',
  styleUrls: ['./redeemed-vouchers.page.scss'],
})
export class RedeemedVouchersPage implements OnInit {
  points: number = 0;

  vouchers: Voucher[] = VOUCHERS;

  constructor(
    private storageService: StorageService,
    private voucherService: VouchersService,
    public popoverController: PopoverController
  ) { }

  ngOnInit()
  {
    this.vouchers = this.vouchers.filter(v => v.redeemed);
  }

  async ionViewWillEnter()
  {
    this.points = await this.storageService.get('points') || 0;
    // true = redeemed vouchers
    this.vouchers = this.voucherService.getVouchers(true);
  }

  async presentPopover(voucher: Voucher) {
    const popover = await this.popoverController.create({
      component: RedvouchpopoverPage,
      componentProps: { 'voucher': voucher },
      translucent: true
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', data);

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
