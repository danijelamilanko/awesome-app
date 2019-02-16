import {Pipe, PipeTransform} from '@angular/core';
import { User } from '../models/user/user';

@Pipe({name: 'Filter'})
export class FilterPipe implements PipeTransform {
  transform(users: User[], query: string): any {
    if (query) {
      return users.filter(user => (user.name.first.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.name.last.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.email.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.dob.age.toString().toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        user.phone.toLowerCase().indexOf(query.toLowerCase()) > -1));
    }
    return users;
  }
}
