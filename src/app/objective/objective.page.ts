import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EasyObjectivePopoverPage } from '../easy-objective-popover/easy-objective-popover.page';
import { StorageService } from '../services/storage.service';
import { VouchersService } from '../services/vouchers.service';
import { Objective } from '../struct/objective';
import { OBJECTIVES } from '../struct/objective-data';
import { Voucher } from '../struct/vouchers';
import { HelpPopoverPage } from '../help-popover/help-popover.page';
import { ObjectiveService } from '../services/objective.service';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.page.html',
  styleUrls: ['./objective.page.scss'],
})
export class ObjectivePage {
  points: number = 0;
  
  vouchers: Voucher[] = [];
  
  objectives: Objective[] = OBJECTIVES;
  easy: Objective[] = [];
  advanced: Objective[] = [];
  
  constructor(
    public popoverController: PopoverController,
    private storageService: StorageService,
    private voucherService: VouchersService,
    private objectiveService: ObjectiveService
    ) { }
    
    async ionViewWillEnter()
    {
      this.points = await this.storageService.get('points') || 0;
      this.refreshList();
    }
    
    async objectivePopover(objective: Objective) {
      const popover = await this.popoverController.create({
        component: EasyObjectivePopoverPage,
        componentProps: { 'objective': objective },
        translucent: true
      });
      
      await popover.present();
      
      const { data } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', data);
      
      if (data && data.redeem)
      {
        // objective.redeemed = data.redeem;
        // once voucher is redeemed, update the points in storage
        console.log(objective);
        
        var points: number = await this.storageService.get('points') || 0;
        
        if (typeof(objective.reward) == 'number')
        {
          points += objective.reward;
        }
        
        else if (typeof(objective.reward) == 'object')
        {
          this.voucherService.redeem(objective.reward.id);
        }
        
        await this.storageService.set('points', points);
        objective.claimed = true;
        this.points = points;
      }
      
      this.refreshList();
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
    
    outputReward(objective: Objective): string
    {
      if (typeof(objective.reward) == 'number') return objective.reward.toString() + ' points';
      else if (typeof(objective.reward) == 'object') return objective.reward.shop;
    }

    private refreshList()
    {
      // true = redeemed vouchers
      this.vouchers = this.voucherService.getVouchers(true);
     
      this.easy = this.objectives.filter(o => o.level == 'easy');
      this.advanced = this.objectives.filter(o => o.level == 'advanced');
    }
  }
  