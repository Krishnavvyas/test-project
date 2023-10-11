import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./landing-page/landing-page.module").then(m => m.LandingPageModule)
  },
  {
    path: "services",
    loadChildren: () => import("./card-services/card-services.module").then(m => m.CardServicesModule)
  },
  {
    path: "about-us",
    loadChildren: () => import("./about-us/about-us.module").then(m => m.AboutUsModule)
  },
  {
    path: "get-details",
    loadChildren: () => import("./customer-details/customer-details.module").then(m => m.CustomerDetailsModule)
  },
  {
    path: "header-details",
    loadChildren: () => import("./header-details/header-details.module").then(m => m.HeaderDetailsModule)
  },
  {
    path: "card-status",
    loadChildren: () => import("./card-status/card-status.module").then(m => m.CardStatusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
