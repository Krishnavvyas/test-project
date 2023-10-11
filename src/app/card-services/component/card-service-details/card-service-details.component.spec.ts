import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceDetailsComponent } from './card-service-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardServiceDetailsComponent', () => {
  let component: CardServiceDetailsComponent;
  let fixture: ComponentFixture<CardServiceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardServiceDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
