import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardStatusComponent } from './component/card-status/card-status.component';

const routes: Routes = [{
  path: "",
  component: CardStatusComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardStatusRoutingModule { }
