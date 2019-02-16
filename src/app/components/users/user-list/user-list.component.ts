import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';
import { BackendService } from '../../../services/backend.service';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationService } from '../../../services/application.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  public userList: User[] = [];
  public userSelected: User | null = null;
  public query = '';

  private userSelectedSubscription: Subscription;
  private searchTermChangeSubscription: Subscription;

  constructor(private backendService: BackendService,
              private applicationService: ApplicationService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.userSelectedSubscription = this.applicationService.userSelectedEvent.subscribe(
      (user: User) => {
        this.userSelected = user;
      },
      error => {
      }
    );
    this.searchTermChangeSubscription = this.searchService.searchTriggeredEvent.subscribe(
      (text: any) => {
        this.query = text;
      },
      error => {
      }
    );

    this.backendService.getUsers().subscribe((response: any) => {
      this.userList = response.results;
    });
  }

  ngOnDestroy() {
    if (this.userSelectedSubscription) {
      this.userSelectedSubscription.unsubscribe();
    }
    if (this.searchTermChangeSubscription) {
      this.searchTermChangeSubscription.unsubscribe();
    }
  }
}
