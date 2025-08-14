import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  login(username:string,password:string):boolean{
    if(password === '1234'){
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(){
    this.loggedIn = false;  
  }

  isAuthenticated():boolean {
    return this.loggedIn;
  }
}
