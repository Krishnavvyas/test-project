import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent {

  constructor(private router : Router) {}

  getCustomerDetails(): void {
    this.router.navigateByUrl("/get-details");
  }

}
