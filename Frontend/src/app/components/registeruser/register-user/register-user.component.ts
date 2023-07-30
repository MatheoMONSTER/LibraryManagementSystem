import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  newUser: User;
  constructor(private newUserService: UsersService) {
    this.newUser = {
      id: 0,
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      password: '',
    };
  }

  onRegister(): void {
    this.newUserService.registerNewUser(this.newUser).subscribe(
      (user) => {
        // Obsługa sukcesu - np. wyświetlenie komunikatu o sukcesie rejestracji
        console.log('User registered successfully:', user);
      },
      (error) => {
        // Obsługa błędu - np. wyświetlenie komunikatu o błędzie rejestracji
        console.error('Error during registration:', error);
      }
    );
  }
}
