import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userName='ankit';
  password=''
  errorMessage='Invalid Credentails'
  invalidLogin=false
  
  constructor(private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService){

  }

  ngOnInit(){
    
  }
  handleLogin(){
    console.log(this.userName);
    //if(this.userName==="ankit" && this.password ==="dummy")
    if(this.hardcodedAuthenticationService.authenticate(this.userName,this.password)){
      this.router.navigate(['welcome',this.userName])
      this.invalidLogin= false
    }else{
      this.invalidLogin=true
    }
    console.log(this.password)
  }
}


