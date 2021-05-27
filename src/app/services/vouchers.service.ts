import { Injectable } from '@angular/core';
import { VOUCHERS } from '../struct/voucher-data';
import { Voucher } from '../struct/vouchers';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class VouchersService
{
  vouchers: Voucher[] = [];

  constructor(private storageService: StorageService) { }

  async init()
  {
    const vouchers = await this.storageService.get('vouchers');
    if (!vouchers)
    {
      await this.storageService.set('vouchers', VOUCHERS);
    }

    this.vouchers = vouchers || VOUCHERS;
  }

  async redeem(id: number)
  {
    this.vouchers.map(voucher => {
      if (voucher.id == id) voucher.redeemed = true;
    })
    this.storageService.set('vouchers', this.vouchers);
  } 

  getVouchers(redeemed?: boolean): Voucher[]
  {
    if (redeemed === undefined) return this.vouchers;
    else return this.vouchers.filter(voucher => (!redeemed && voucher.redeemed === undefined) || voucher.redeemed == redeemed);
  }
}
