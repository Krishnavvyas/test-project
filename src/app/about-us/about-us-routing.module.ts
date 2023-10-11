import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDetailsComponent } from './component/about-us-details/about-us-details.component';

const routes: Routes = [
  {
    path: "xyz",
    component: AboutUsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
