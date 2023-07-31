import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.baseApiUrl + '/api/User');
  }

  registerNewUser(addUserRequest: User): Observable<User> { 
    return this.http.post<User>(this.baseApiUrl + '/api/User', addUserRequest);
  }
}
