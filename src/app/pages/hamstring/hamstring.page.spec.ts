import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamstringPage } from './hamstring.page';

describe('HamstringPage', () => {
  let component: HamstringPage;
  let fixture: ComponentFixture<HamstringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamstringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamstringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
