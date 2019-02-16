import { NgModule } from '@angular/core';
import { UserListModule } from '../user-list/user-list.module';
import { UserSearchComponent } from './user-search.component';
import { ComboModule } from '../../form-elements/combo/combo.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserSearchComponent
  ],
  imports: [
    HttpClientModule,
    UserListModule,
    ComboModule
  ],
  providers: [],
  exports: [UserSearchComponent]
})
export class UserSearchModule { }
