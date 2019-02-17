import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  private _pageTotal: number;
  private _pageCurrent: number;

  @Output() public page: EventEmitter<any> = new EventEmitter();
  public paginate: Array<any>;

  @Input()
  get pageCurrent() {
    return this._pageCurrent;
  }

  set pageCurrent(value: number) {
    this._pageCurrent = value;
    this.setPaginate();
  }

  @Input()
  get pageTotal() {
    return this._pageTotal;
  }

  set pageTotal(value: number) {
    this._pageTotal = value;
    this.setPaginate();
  }

  private static pagination(pageTotal: number, pageCurrent: number = 1, pageShowCurrent = 4, pageShowAll = 12): Array<any> {
    const page = [];
    if (pageTotal > pageShowAll) {
      if (pageCurrent < pageShowCurrent * 2 - 2) {
        for (let i = 1; i <= pageShowCurrent * 2 + pageShowCurrent - 1; i++) {
          page.push(i);
        }
        page.push('...');
        page.push(pageTotal - 1);
        page.push(pageTotal);
      } else {
        page.push(1);
        page.push(2);
        page.push('...');
        if (pageTotal - pageShowCurrent > pageCurrent + 1) {
          for (let i = pageCurrent - pageShowCurrent + 1; i < pageCurrent + pageShowCurrent; i++) {
            page.push(i);
          }
          page.push('...');
          page.push(pageTotal - 1);
          page.push(pageTotal);
        } else {
          for (let i = pageTotal - pageShowCurrent * 2; i <= pageTotal; i++) {
            page.push(i);
          }
        }
      }
    } else {
      for (let i = 1; i <= pageTotal; i++) {
        page.push(i);
      }
    }
    return page;
  }

  public moveToLeft() {
    if (this.pageCurrent <= 1) {
      return;
    }
    this.page.emit(this.pageCurrent - 1);
  }

  public moveToRight() {
    if (this.pageCurrent >= this.pageTotal) {
      return;
    }
    this.page.emit(this.pageCurrent + 1);
  }

  public changePage(i) {
    if (i !== '...' && i !== this.pageCurrent) {
      this.page.emit(i);
    }
  }

  private setPaginate() {
    this.paginate = PaginationComponent.pagination(this.pageTotal, this.pageCurrent);
  }
}
