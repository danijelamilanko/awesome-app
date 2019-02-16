import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserItemModule } from './user-item/user-item.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserItemModule
  ],
  providers: [],
  exports: [UserListComponent]
})
export class UserListModule { }
