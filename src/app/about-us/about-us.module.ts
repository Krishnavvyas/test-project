import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsDetailsComponent } from './component/about-us-details/about-us-details.component';
import { HeaderDetailsModule } from '../header-details/header-details.module';


@NgModule({
  declarations: [
    AboutUsDetailsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HeaderDetailsModule
  ]
})
export class AboutUsModule { }
