import { NgModule } from '@angular/core';
import { UserListModule } from '../user-list/user-list.module';
import { UserSearchComponent } from './user-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserListModule
  ],
  providers: [],
  exports: [UserSearchComponent]
})
export class UserSearchModule { }
