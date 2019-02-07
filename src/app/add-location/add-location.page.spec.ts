import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationPage } from './add-location.page';

describe('AddLocationPage', () => {
  let component: AddLocationPage;
  let fixture: ComponentFixture<AddLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
