import { NgModule } from '@angular/core';
import { FullNamePipe } from './pipes/full-name.pipe';


@NgModule({
  declarations: [
    FullNamePipe
  ],
  imports: [],
  providers: [],
  exports: [
    FullNamePipe
  ]
})
export class SharedModule {
}
