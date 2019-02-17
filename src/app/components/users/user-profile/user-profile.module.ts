import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../../../shared.module';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule
  ],
  providers: [],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
