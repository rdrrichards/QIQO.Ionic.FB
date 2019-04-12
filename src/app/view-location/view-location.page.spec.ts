import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationPage } from './view-location.page';

describe('ViewLocationPage', () => {
  let component: ViewLocationPage;
  let fixture: ComponentFixture<ViewLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
