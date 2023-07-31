import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  addUserRequest: User = {
    id: 0, 
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
      
  }

  addUser() {
    this.userService.registerNewUser(this.addUserRequest)
    .subscribe({
      next: (user) => {
        console.log(user);
      }
    })
  }

}
