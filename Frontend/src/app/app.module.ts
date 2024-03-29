import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './components/registeruser/register-user/register-user.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    RegisterUserComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
