import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HelpPopoverPage } from '../help-popover/help-popover.page';
import { AlbumService } from '../services/album.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    private albumService: AlbumService
  ) { }

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

  takePhoto()
  {
    this.albumService.takePhoto();
  }


}
