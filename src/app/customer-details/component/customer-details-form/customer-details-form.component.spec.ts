import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsFormComponent } from './customer-details-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('CustomerDetailsFormComponent', () => {
  let component: CustomerDetailsFormComponent;
  let fixture: ComponentFixture<CustomerDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsFormComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CustomerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
