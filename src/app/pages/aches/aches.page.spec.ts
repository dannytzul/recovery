import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchesPage } from './aches.page';

describe('AchesPage', () => {
  let component: AchesPage;
  let fixture: ComponentFixture<AchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
