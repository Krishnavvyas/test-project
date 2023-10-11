import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { HeaderDetailsModule } from '../header-details/header-details.module';


@NgModule({
  declarations: [
    UserLandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HeaderDetailsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule { }
