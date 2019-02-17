import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../models/user/user';
import { ApplicationService } from '../../../../services/application.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() userItem: User;

  constructor(public applicationService: ApplicationService) { }

  public userSelected() {
    this.applicationService.selectUser(this.userItem);
  }

  ngOnInit() {
  }

}
