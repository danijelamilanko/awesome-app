import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user/user';


@Injectable()
export class ApplicationService {
  public userSelectedEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  public selectUser(user) {
    this.userSelectedEvent.emit(user);
  }
}
