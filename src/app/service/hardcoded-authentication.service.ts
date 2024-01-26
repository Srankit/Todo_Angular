import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
   userName='ankit';
   password=0o00000;
 
  
  constructor() { }
  authenticate(userName: any, password: any) {
    console.log('before'+ this.isUserLoggedIn())
    if(this.userName==="ankit" && this.password ===0o00000){
      sessionStorage.setItem('authenticateUser',userName);
      console.log('after'+ this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
   let user= sessionStorage.getItem('authenticateUser');
   return!(user==null );
}
}
