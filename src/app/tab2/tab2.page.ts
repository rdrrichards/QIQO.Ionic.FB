import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  users: any[];
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.userService.getUsers().valueChanges().subscribe(users => {
      this.users = users;
    });
  }
  clickUser(email: string) {
    console.log(email);
  }
}
