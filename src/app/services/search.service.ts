import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class SearchService {

  @Output() searchTriggeredEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged();
  }

  triggerSearch(term) {
    this.searchTriggeredEvent.emit(term);
  }
}
