import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-help-popover',
  templateUrl: './help-popover.page.html',
  styleUrls: ['./help-popover.page.scss'],
})
export class HelpPopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async DismissClick() {
    await this.popoverController.dismiss();
      }
}
