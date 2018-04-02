import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent},
  { path: 'users/new', component: UserNewComponent },
  { path: 'users/:id', component: UserDetailsComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
