import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userList: User[] = [{name: 'Danijela'}];

  constructor() { }

  ngOnInit() {
  }

}
