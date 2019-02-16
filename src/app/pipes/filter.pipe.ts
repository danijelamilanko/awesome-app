import {Pipe, PipeTransform} from '@angular/core';
import { User } from '../models/user/user';

@Pipe({name: 'Filter'})
export class FilterPipe implements PipeTransform {
  transform(users: User[], query: string): any {
    if (query) {
      return users.filter(user => (user.name.first.indexOf(query) > -1 ||
        user.name.last.indexOf(query) > -1 ||
        user.email.indexOf(query) > -1 ||
        user.phone.indexOf(query) > -1));
    }
    return users;
  }
}
