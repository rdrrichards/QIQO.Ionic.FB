import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AddLocationPage } from './add-location.page';
import { environment } from 'src/environments/environment';

describe('AddLocationPage', () => {
  let component: AddLocationPage;
  let fixture: ComponentFixture<AddLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationPage);
    component = fixture.componentInstance;
    // component.locationForm = new FormGroup({ name: '' });
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   postalCode: ['', Validators.required]
    // });
    fixture.detectChanges();
  });

  it('should create', () => {
    component.locationForm = component.buildForm();
    expect(component).toBeTruthy();
  });
});
