import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HelpPopoverPage } from '../help-popover/help-popover.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
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
