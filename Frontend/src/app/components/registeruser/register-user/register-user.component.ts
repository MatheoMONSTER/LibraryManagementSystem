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

  // Add a property to track which fields are empty
  emptyFields: boolean[] = [false, false, false, false, false];

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
    const { username, email, firstName, lastName, password } = this.addUserRequest;

    // Update the emptyFields array based on form validity
    this.emptyFields = [
      username.trim().length === 0,
      email.trim().length === 0,
      firstName.trim().length === 0,
      lastName.trim().length === 0,
      password.trim().length === 0
    ];

    return !this.emptyFields.some(fieldEmpty => fieldEmpty);
  }
}
