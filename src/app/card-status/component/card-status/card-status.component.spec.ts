import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatusComponent } from './card-status.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardStatusComponent', () => {
  let component: CardStatusComponent;
  let fixture: ComponentFixture<CardStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStatusComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
