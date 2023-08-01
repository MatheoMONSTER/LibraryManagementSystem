import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  addUserRequest: User = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };

  constructor(private userService: UsersService) { }

  ngOnInit(): void { }

  addUser() {
    if (this.isFormValid()) {
      this.userService.registerNewUser(this.addUserRequest).subscribe({
        next: (user) => {
          console.log(user);
        }
      });
    } else {
      alert('Proszę wypełnić wszystkie wymagane pola.');
    }
  }

  isFormValid(): boolean {
    const {username, email, firstName, lastName, password} = this.addUserRequest;
    return (
      username.trim().length > 0 &&
      email.trim().length > 0 &&
      firstName.trim().length > 0 && 
      lastName.trim().length > 0 && 
      password.trim().length > 0
    );
  }
}
