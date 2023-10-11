import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardStatusRoutingModule } from './card-status-routing.module';
import { CardStatusComponent } from './component/card-status/card-status.component';
import { HeaderDetailsModule } from '../header-details/header-details.module';


@NgModule({
  declarations: [
    CardStatusComponent
  ],
  imports: [
    CommonModule,
    CardStatusRoutingModule,
    HeaderDetailsModule
  ]
})
export class CardStatusModule { }
