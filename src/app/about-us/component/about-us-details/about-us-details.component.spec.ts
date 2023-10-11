import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDetailsComponent } from './about-us-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AboutUsDetailsComponent', () => {
  let component: AboutUsDetailsComponent;
  let fixture: ComponentFixture<AboutUsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AboutUsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
