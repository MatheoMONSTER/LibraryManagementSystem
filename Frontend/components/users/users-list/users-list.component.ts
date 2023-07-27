import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users: User[] = [];
  constructor(private usersService: UsersService) { }


  ngOnInit(): void {

    this.usersService.getAllUsers()
    .subscribe({
      next:(users) => {
        console.log(users);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
