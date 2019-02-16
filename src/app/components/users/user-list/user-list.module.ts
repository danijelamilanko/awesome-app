import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserItemModule } from './user-item/user-item.module';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../../pipes/filter.pipe';


@NgModule({
  declarations: [
    UserListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserItemModule
  ],
  providers: [],
  exports: [UserListComponent]
})
export class UserListModule { }
