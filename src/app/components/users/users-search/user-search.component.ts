import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  public searchTerm$ = new Subject<string>();
  public searchText = '';

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.searchService.triggerSearch(results);
      });
  }

  ngOnInit() {
  }
}
