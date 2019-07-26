import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinSplintsPage } from './shin-splints.page';

describe('ShinSplintsPage', () => {
  let component: ShinSplintsPage;
  let fixture: ComponentFixture<ShinSplintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShinSplintsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinSplintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
