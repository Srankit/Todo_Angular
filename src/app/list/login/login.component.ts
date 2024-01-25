import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userName=''
  password=''
  errorMessage='Invalid Credentails'
  invalidLogin=false
  
  constructor(private router:Router){

  }

  ngOnInit(){
    
  }
  handleLogin(){
    console.log(this.userName);
    if(this.userName==="ankit" && this.password ==="dummy"){
      this.router.navigate(['welcome',this.userName])
      this.invalidLogin= false
    }else{
      this.invalidLogin=true
    }
    console.log(this.password)
  }
}
function handleLogin() {
  throw new Error('Function not implemented.');
}

