import { Pipe, PipeTransform } from '@angular/core';
import { Name } from '../models/user/name';

@Pipe({name: 'FullName'})
export class FullNamePipe implements PipeTransform {
  transform(name: Name): any {
    return name.first[0].toUpperCase() + name.first.substr(1).toLowerCase() + ' ' + name.last[0].toUpperCase() + name.last.substr(1).toLowerCase();
  }
}
