import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: User[] = [{name: 'Danijela'}];

  constructor() { }

  ngOnInit() {
  }

}
