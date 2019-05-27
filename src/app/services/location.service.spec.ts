import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { from } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

const input: any[][] = [[
  { name: 'Location I', description: 'Location I Description', city: 'Nashville', state: 'TN', postalCode: '37211'},
  { name: 'Location II', description: 'Location II Description', city: 'Nashville', state: 'TN', postalCode: '37211'},
  { name: 'Location III', description: 'Location III Description', city: 'Nashville', state: 'TN', postalCode: '37211'},
]];

const data = from(input);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
};

const angularFirestoreStub = {
    list: jasmine.createSpy('list').and.returnValue(collectionStub)
};

describe('LocationService', () => {
  let service: LocationService;
  let angularFireDatabase: AngularFireDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocationService,
        { provide: AngularFireDatabase, useValue: angularFirestoreStub }
      ]
    });

    service = TestBed.get(LocationService);
    angularFireDatabase = TestBed.get(AngularFireDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(angularFirestoreStub.list).toHaveBeenCalledWith('locations');
  });

  it('gets locations', () => {
    const result = service.getLocations();
    expect(result).toBeTruthy();
  });

});
