import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailsComponent } from './header-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('HeaderDetailsComponent', () => {
  let component: HeaderDetailsComponent;
  let fixture: ComponentFixture<HeaderDetailsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to services page on click of services from header nav bar", () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    component.navigateToServices();
    expect(navigateSpy).toHaveBeenCalledWith("services/card-services");
  });

  it("should navigate to about us page on click of about us from header nav bar", () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    component.navigateToAboutUS();
    expect(navigateSpy).toHaveBeenCalledWith("about-us/xyz");
  });
});
