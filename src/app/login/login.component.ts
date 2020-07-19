import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='arkaza'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router:Router) { }

  ngOnInit() {
  }
  handelLogin(){
    //console.log(this.username);
    //console.log(this.password);
    if(this.username==="arkaza" && this.password=='mony'){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }

}
