import { Injectable } from '@angular/core';

import { decode } from 'utils';

@Injectable({
    providedIn:"root"
})
export class AuthService {
  public getToken(): string {
    return sessionStorage.getItem('token');
  }
  public tokenNotExpired(token:string): boolean{ //TODO: compare currentDateTime with tokenDateTime    
    const d = decode(token); // exp, iat, id, name, roles
    console.log(token,"==========Token Decoded ============",d)
    console.log(d['exp']);
    return true;
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return this.tokenNotExpired(token);
  }

}