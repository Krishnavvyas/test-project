import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardServiceDetailsComponent } from './component/card-service-details/card-service-details.component';

const routes: Routes = [
  {
    path: "card-services",
    component: CardServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardServicesRoutingModule { }
