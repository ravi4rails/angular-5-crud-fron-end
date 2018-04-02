import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { UsersService } from './users/users.service';
import { UserNewComponent } from './users/user-new/user-new.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserNewComponent,
    UserDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
