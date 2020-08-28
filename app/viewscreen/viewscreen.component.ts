import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Screen } from '../screen';
import { Observable } from 'rxjs';
import { Theater } from '../theater';

@Component({
  selector: 'app-viewscreen',
  templateUrl: './viewscreen.component.html',
  styleUrls: ['./viewscreen.component.css']
})
export class ViewscreenComponent implements OnInit {
 k: number=5;
  id: number;
  arr1 : Observable<Screen[]>; //
  theater : Theater = new Theater();
  screen : Screen = new Screen();
  constructor(private route: ActivatedRoute,private service : MovieService,private router: Router)
  {
  }

  ngOnInit() {
     this.id = this.route.snapshot.params['id'];
     this.arr1=this.service.findByTheaterId(this.id);
     this.service.findTheaterById(this.id).subscribe(data=>this.theater=data);
  }
  
  addScreen(id : number){
    this.router.navigate(['add1',id]);
  }
  list(){
    this.router.navigate(['view']);
  }

  update(id: number){
    this.router.navigate(['update1',id]);
  }
 
 
reloadData()  {
this.arr1=this.service.findByTheaterId(this.id);
this.view();
}

view(){
this.router.navigate(['view1',this.id]);
}

delete(screenId : number)
  {
    this.service.deleteScreenById(screenId).subscribe(data => {console.log(data);this.reloadData();},error => console.log(error));
    this.router.navigate(['view1',this.id]);
    this.ngOnInit();
    this.service.findTheaterById(this.id).subscribe(data=>this.theater=data);
    this.reloadData();
  }


}
