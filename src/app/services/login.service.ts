import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string;
  constructor(private httpClient: HttpClient) { 
    this.url = 'http://localhost:3000/api/v1/users';
  }

  // register(newUser: User) {
  //   console.log(" -------------> User's data ", newUser);
  // }

  login(email: string, password: string) {
      return this.httpClient.post<any>(
        `${this.url}/login`, 
        {email:email,password:password}
      );           
  }

  logout() {
    return this.httpClient.post<any>(
      `${this.url}/logout`,{}
    );
  }
}
