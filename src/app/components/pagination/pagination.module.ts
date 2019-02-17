import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [PaginationComponent]
})
export class PaginationModule {
}
