import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
