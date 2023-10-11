import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsFormComponent } from './component/customer-details-form/customer-details-form.component';

const routes: Routes = [
  {
    path: "",
    component: CustomerDetailsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailsRoutingModule { }
