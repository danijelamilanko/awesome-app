import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BackendService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(filter = ''): Observable<object> {
    return this.httpClient.get('https://randomuser.me/api/?results=10');
  }
}
