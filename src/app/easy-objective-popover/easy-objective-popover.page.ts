import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Objective } from '../struct/objective';
import { VOUCHERS } from '../struct/voucher-data';

@Component({
  selector: 'app-easy-objective-popover',
  templateUrl: './easy-objective-popover.page.html',
  styleUrls: ['./easy-objective-popover.page.scss'],
})
export class EasyObjectivePopoverPage implements OnInit
{
  @Input() objective: Objective;
  isVoucher: boolean = false;
  
  constructor(
    public popoverCtrl: PopoverController
    ) { }
    
    ngOnInit()
    {
      if (this.objective.reward === undefined)
      {
        // you can handle the points by default.
        return;
      }
      else if (typeof(this.objective.reward) == 'number')
      {
        this.isVoucher = false;
        // do some number magic.
      }
      else if (typeof(this.objective.reward) == 'object')
      {
        this.isVoucher = true;
        this.objective.reward.redeemed = true;
        console.log(VOUCHERS);
        // voucher
      }
    }
    
    async DismissClick() {
      await this.popoverCtrl.dismiss();
    }
    
    claim()
    {
      
      this.popoverCtrl.dismiss({ 'redeem': true });
    }
    
  }
  