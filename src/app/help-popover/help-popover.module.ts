import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPopoverPageRoutingModule } from './help-popover-routing.module';

import { HelpPopoverPage } from './help-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpPopoverPageRoutingModule
  ],
  declarations: [HelpPopoverPage]
})
export class HelpPopoverPageModule {}
