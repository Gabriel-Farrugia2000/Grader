import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
import { StorageService } from './services/storage.service';
import { VouchersService } from './services/vouchers.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private voucherService: VouchersService,
    private albumService: AlbumService
  ) {}

  async ngOnInit()
  {
    const points = await this.storageService.get('points');
    if (points == null)
    { //points declared when the app is launched for the first time
      await this.storageService.set('points', 0);
    }
    
    await this.voucherService.init();
    await this.albumService.init();
  }
  
}
