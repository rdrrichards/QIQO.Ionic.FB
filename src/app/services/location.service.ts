import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
    itemsRef: AngularFireList<any[]>;
    items: Observable<any[]>;
    constructor(private db: AngularFireDatabase) {
      this.itemsRef = this.db.list('/locations');
      this.items = this.itemsRef.snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
    }

    getLocations() {
        return this.items;
    }
    saveLocation(key: string, location: any) {
      this.db.object(`/locations/${key}`).update(location)
        .then(ref => {
          console.log('Save location suceeded!', ref);
        })
        .catch(err => {
          console.log('Save location failed', err.message);
        });
    }
    addLocation(location: any) {
      const key = this.db.createPushId();
      this.db.object(`/locations/${key}`).set(location)
        .then(ref => {
          console.log('Add location suceeded!', ref);
        })
        .catch(err => {
          console.log('Add location failed', err.message);
        });
    }
}
