import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

    public items: AngularFireList<any[]>;

    constructor(private db: AngularFireDatabase) {
        this.items = db.list('/users');
    }

    getUsers() {
        return this.items;
    }

    getUser(id: number) {
        return this.db.object(`/users/${id}`);
    }
}
