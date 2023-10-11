import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.scss']
})
export class HeaderDetailsComponent {

  constructor(private router : Router) {}

  navigateToServices(): void {
    this.router.navigateByUrl("services/card-services");
  }

  navigateToAboutUS(): void {
    this.router.navigateByUrl("about-us/xyz");
  }
}
