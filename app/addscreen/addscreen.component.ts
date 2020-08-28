import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Screen } from '../screen';
import { Theater } from '../theater';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addscreen',
  templateUrl: './addscreen.component.html',
  styleUrls: ['./addscreen.component.css']
})
export class AddscreenComponent implements OnInit {

  id: number;
  arr1 : Observable<Screen[]>;
  screen : Screen = new Screen();
  temp : Object ;
  theater : Theater = new Theater();
  submitted :boolean = false;

  constructor(private service : MovieService , private router : Router,private route: ActivatedRoute) { }
  ngOnInit() {

    this.id =this.theater.theaterId = this.route.snapshot.params['id'];
  
    }

  
  newScreen(): void {
    this.submitted = false;
    this.screen = new Screen();
  }

  verify(){
  this.service.findScreen(this.id,this.screen.screenName).subscribe(data=>{this.router.navigate(['view1',this.id]);
  alert(this.screen.screenName+" Already exist")},
  error=>{this.save(),console.log(error)});
  }

  save() {
    this.screen.theater=this.theater;
    this.service.createScreen(this.screen).subscribe(data => console.log(data), error => console.log(error));
    this.screen = new Screen();
    this.reloadData();
  }

  onSubmit() {
    this.submitted = true;
    this.verify();
  }
  reloadData() {
    this.arr1 = this.service.findByTheaterId(this.id);
    this.gotoList();
    this.gotoList();
   }
  gotoList() {
    this.router.navigate(['view1',this.id]);
  }
}
