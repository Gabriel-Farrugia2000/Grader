import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from "@ionic/angular";
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {

  @Input('voucher') voucher;
  points: number = 0;

  constructor(
    private popoverCtrl: PopoverController,
    private storageService: StorageService
  ) { }

  async ngOnInit()
  {
    this.points = await this.storageService.get('points') || 0;
    
  }

  async DismissClick() {
    await this.popoverCtrl.dismiss();
      }

  redeem()
  {
    
    this.popoverCtrl.dismiss({ 'redeem': true });
  }


}
