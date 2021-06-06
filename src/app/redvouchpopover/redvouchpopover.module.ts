import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedvouchpopoverPageRoutingModule } from './redvouchpopover-routing.module';

import { RedvouchpopoverPage } from './redvouchpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedvouchpopoverPageRoutingModule
  ],
  declarations: [RedvouchpopoverPage]
})
export class RedvouchpopoverPageModule {}
