import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLandingPageComponent } from './user-landing-page.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserLandingPageComponent', () => {
  let component: UserLandingPageComponent;
  let fixture: ComponentFixture<UserLandingPageComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLandingPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(UserLandingPageComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to get Customer Details", () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    component.getCustomerDetails();
    expect(navigateSpy).toHaveBeenCalled();

  });
});
