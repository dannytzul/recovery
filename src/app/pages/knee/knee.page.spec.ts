import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePage } from './knee.page';

describe('KneePage', () => {
  let component: KneePage;
  let fixture: ComponentFixture<KneePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
