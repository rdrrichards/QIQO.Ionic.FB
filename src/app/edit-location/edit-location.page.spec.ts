import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocationPage } from './edit-location.page';

describe('EditLocationPage', () => {
  let component: EditLocationPage;
  let fixture: ComponentFixture<EditLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
