import { NgModule } from '@angular/core';
import { UserItemComponent } from './user-item.component';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../../../pipes/full-name.pipe';


@NgModule({
  declarations: [
    UserItemComponent,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [UserItemComponent]
})
export class UserItemModule { }
