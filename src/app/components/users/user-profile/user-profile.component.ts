import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApplicationService } from '../../../services/application.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../models/user/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public userSelected: User | null = null;

  private _userSelectedSubscription: Subscription;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this._userSelectedSubscription = this.applicationService.userSelectedEvent.subscribe(
      (user: User) => {
        this.userSelected = user;
      },
      error => {
      }
    );
  }

  ngOnDestroy() {
    if (this._userSelectedSubscription) {
      this._userSelectedSubscription.unsubscribe();
    }
  }
}
