import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardServicesRoutingModule } from './card-services-routing.module';
import { CardServiceDetailsComponent } from './component/card-service-details/card-service-details.component';
import { HeaderDetailsModule } from '../header-details/header-details.module';


@NgModule({
  declarations: [
    CardServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    CardServicesRoutingModule,
    HeaderDetailsModule
  ]
})
export class CardServicesModule { }
