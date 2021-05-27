import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectivePageRoutingModule } from './objective-routing.module';

import { ObjectivePage } from './objective.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectivePageRoutingModule
  ],
  declarations: [ObjectivePage]
})
export class ObjectivePageModule {}
