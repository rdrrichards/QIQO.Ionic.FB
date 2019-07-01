import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';
import { of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

const input: any[] = [
  { name: 'Location I', description: 'Location I Description', city: 'Nashville', state: 'TN', postalCode: '37211'},
  { name: 'Location II', description: 'Location II Description', city: 'Nashville', state: 'TN', postalCode: '37211'},
  { name: 'Location III', description: 'Location III Description', city: 'Nashville', state: 'TN', postalCode: '37211'},
];

export class AngularFireDatabaseMock {
  list(query: string): any {
      return {
        snapshotChanges() {
          return of(input);
        }
      };
  }
}

describe('LocationService', () => {
  let service: LocationService;
  let angularFireDatabase: AngularFireDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocationService,
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock }
      ]
    });

    service = TestBed.get(LocationService);
    angularFireDatabase = TestBed.get(AngularFireDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    // expect(angularFirestoreStub.list).toHaveBeenCalledWith('locations');
  });

  it('gets locations', () => {
    const result = service.getLocations();
    expect(result).toBeTruthy();
  });

});
