import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/user/group';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  public userGroups: Group[] = [{name: 'Student'}];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getUserGroups().subscribe((response: any) => {
      console.log('response', response.results);
      // this.userGroups =
    });
  }

}
