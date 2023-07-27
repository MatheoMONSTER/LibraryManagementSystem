import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
