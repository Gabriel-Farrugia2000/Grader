import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-redvouchpopover',
  templateUrl: './redvouchpopover.page.html',
  styleUrls: ['./redvouchpopover.page.scss'],
})
export class RedvouchpopoverPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() {
  }

  async DismissClick() {
    await this.popoverCtrl.dismiss();
      }


}
