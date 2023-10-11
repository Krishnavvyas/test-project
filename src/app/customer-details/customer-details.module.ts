import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { CustomerDetailsFormComponent } from './component/customer-details-form/customer-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderDetailsModule } from '../header-details/header-details.module';


@NgModule({
  declarations: [
    CustomerDetailsFormComponent
  ],
  imports: [
    CommonModule,
    CustomerDetailsRoutingModule,
    ReactiveFormsModule,
    HeaderDetailsModule
  ]
})
export class CustomerDetailsModule { }
