import { NgModule } from '@angular/core';
import { UserItemComponent } from './user-item.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared.module';


@NgModule({
  declarations: [
    UserItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  exports: [UserItemComponent]
})
export class UserItemModule { }
