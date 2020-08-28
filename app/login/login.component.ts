import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login1 : Login = new Login();
//'string' is a primitive, but 'String' is a wrapper object
user : string;
submitted =false;

  constructor(private service : MovieService,
    private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
  }


  login(){
  let str = this.login1.username;  
  this.service.findUserLogin(this.login1.username,this.login1.password).subscribe(data => {sessionStorage.setItem("user",str);this.goto();},
  error =>{alert("Login Not Successfull");console.log(error);});
  this.submitted=true;
  this.login1 = new Login();
  }
 
  goto(){
    this.router.navigate(['/view']);
  }


}
