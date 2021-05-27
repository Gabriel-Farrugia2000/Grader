import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyObjectivePopoverPageRoutingModule } from './easy-objective-popover-routing.module';

import { EasyObjectivePopoverPage } from './easy-objective-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyObjectivePopoverPageRoutingModule
  ],
  declarations: [EasyObjectivePopoverPage]
})
export class EasyObjectivePopoverPageModule {}
