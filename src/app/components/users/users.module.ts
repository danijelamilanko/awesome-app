import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserSearchModule } from './users-search/user-search.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    UserSearchModule,
    UserProfileModule
  ],
  providers: [],
  exports: [UsersComponent]
})
export class UsersModule { }
