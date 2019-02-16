import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersModule } from './components/users/users.module';
import { BackendService } from './services/backend.service';
import { ApplicationService } from './services/application.service';
import { SearchService } from './services/search.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [
    BackendService,
    ApplicationService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
