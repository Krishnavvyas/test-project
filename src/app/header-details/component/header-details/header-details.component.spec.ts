import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailsComponent } from './header-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HeaderDetailsComponent', () => {
  let component: HeaderDetailsComponent;
  let fixture: ComponentFixture<HeaderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
