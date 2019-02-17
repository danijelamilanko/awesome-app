import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserItemModule } from './user-item/user-item.module';
import { CommonModule } from '@angular/common';
import { PaginationModule } from '../../pagination/pagination.module';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserItemModule,
    PaginationModule
  ],
  providers: [],
  exports: [UserListComponent]
})
export class UserListModule { }
