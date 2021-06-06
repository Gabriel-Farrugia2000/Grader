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

  profilePic: string;

  constructor(
    public popoverController: PopoverController,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.profilePic = this.albumService.profilePic;
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

  async takePhoto()
  {
    await this.albumService.takePhoto('profile-pic');
    this.profilePic = this.albumService.profilePic;
  }


}
