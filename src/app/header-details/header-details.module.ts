import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderDetailsRoutingModule } from './header-details-routing.module';
import { HeaderDetailsComponent } from './component/header-details/header-details.component';


@NgModule({
  declarations: [
    HeaderDetailsComponent
  ],
  imports: [
    CommonModule,
    HeaderDetailsRoutingModule
  ],
  exports: [HeaderDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderDetailsModule { }
