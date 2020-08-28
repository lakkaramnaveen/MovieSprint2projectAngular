import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Theater } from '../theater';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewtheater',
  templateUrl: './viewtheater.component.html',
  styleUrls: ['./viewtheater.component.css']
})
export class ViewtheaterComponent implements OnInit {


  flag: boolean = false;
  arr1: Observable<Theater[]>;
  theater1 : Theater = new Theater();
 //Observable is used because it is like observer who looks for changes and used for lists
  id : number;
  constructor(private service : MovieService,
    private router: Router) {     
// router provides us with the navigation links and routes
    }
//it will called for the first time
  ngOnInit() {
    this.arr1=this.service.getAllTheaters();
  }
//this method is user defined used for reloading data after any changes made 
  reloadData() {
   this.arr1=this.service.getAllTheaters();
   this.view();
  }

 //in router we have methods like navigate which is used for navigation 
 //i.e,  
 view(){
  this.router.navigate(['view']);
  }

  //it will navigate to list of screens under a particular theater
  screenDetails(id: number  ){
    this.router.navigate(['view1', id]);
  }
//it will naviagte to add theater component
  addTheater(){
    this.router.navigate(['add']);
  }
//t will navigate to update theater component
  update(id){

    this.router.navigate(['update',id]);

  }
//this is a delete method or function 
  delete(theaterId: number){
//The subscriber function defines how to obtain or generate values.
//console.log(data); for understanding how we are getting the data we print it on console
    this.service.deleteTheaterById(theaterId).subscribe(data => {console.log(data)},error => console.log(error));
    this.reloadData();
  }
//if we use cascade type Internal Server Error
//message: "Could not write JSON" will be solved


  logout(){
    let str = sessionStorage.getItem("user");
    str=str.toUpperCase();
    sessionStorage.clear();//empties everything on the sessionStorage 
    this.router.navigate(['login']);
    alert( str+" Logout Success");
  }
  //we have sessionStorage for admin login for successfull logging and logout
}
