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
  public userListFiltered: User[] = [];
  public userSelected: User | null = null;
  public totalPages = 1;
  public pageCurrent = 1;

  private _rowsOnPage = 20;
  private _userListTotal: User[] = [];
  private _query = '';
  private _userSelectedSubscription: Subscription;
  private _searchTermChangeSubscription: Subscription;

  constructor(private backendService: BackendService,
              private applicationService: ApplicationService,
              private searchService: SearchService) { }

  public page(page: number) {
    this.filter(this._query, page);
  }

  private filter(query: string, page: number) {
    this._query = query;
    if (query) {
      this.userListFiltered = this._userListTotal.filter(user => (user.name.first.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.name.last.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.email.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.dob.age.toString().toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.phone.toLowerCase().indexOf(query.toLowerCase()) > -1));
    } else {
      this.userListFiltered = this._userListTotal;
    }
    this.calculatePagination(page);
  }

  private calculatePagination(page: number) {
    this.pageCurrent = page;
    const from = (this.pageCurrent - 1) * this._rowsOnPage;
    this.totalPages = Math.ceil(this.userListFiltered.length / this._rowsOnPage);
    this.userListFiltered = this.userListFiltered.slice(from, this._rowsOnPage * this.pageCurrent);
  }

  ngOnInit() {
    this._userSelectedSubscription = this.applicationService.userSelectedEvent.subscribe(
      (user: User) => {
        this.userSelected = user;
      },
      error => {
      }
    );
    this._searchTermChangeSubscription = this.searchService.searchTriggeredEvent.subscribe(
      (query: any) => {
        this.filter(query, 1);
      },
      error => {
      }
    );

    this.backendService.getUsers().subscribe((response: any) => {
      this._userListTotal = response.results;
      this.userListFiltered = this._userListTotal;
      this.calculatePagination(1);
    });
  }

  ngOnDestroy() {
    if (this._userSelectedSubscription) {
      this._userSelectedSubscription.unsubscribe();
    }
    if (this._searchTermChangeSubscription) {
      this._searchTermChangeSubscription.unsubscribe();
    }
  }
}
