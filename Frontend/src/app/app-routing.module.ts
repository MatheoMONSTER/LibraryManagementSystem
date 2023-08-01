import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { RegisterUserComponent } from './components/registeruser/register-user/register-user.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'register',
    component: RegisterUserComponent
  }, 
  {
    path: 'books',
    component: BooksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
