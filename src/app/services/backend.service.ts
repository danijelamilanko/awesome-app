import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


@Injectable()
export class BackendService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(filter = ''): Observable<object> {
    return this.httpClient.get(environment.apiRandomUser + 'api/?results=500');
  }
}
