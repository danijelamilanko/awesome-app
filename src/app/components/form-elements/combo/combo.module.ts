import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboComponent } from './combo.component';


@NgModule({
  declarations: [
    ComboComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ComboComponent]
})
export class ComboModule { }
