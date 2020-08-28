import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Theater } from '../theater';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addtheater',
  templateUrl: './addtheater.component.html',
  styleUrls: ['./addtheater.component.css']
})
export class AddtheaterComponent implements OnInit {
lis : string;
  arr1: Observable<Theater[]>;
  theater : Theater = new Theater();
  submitted = false;
 arr2:Observable<Theater[]>;
  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit() {
    // this.arr2=this.movieService.getAllTheaters();
  //  this.size();
  }
// size(){
//   this.arr2.forEach(element=>{console.log(element);element.forEach(ele=>{this.lis=ele.theaterName;console.log(ele.theaterName)})});
// }
  newTheater(): void {
    this.submitted = false;
    this.theater = new Theater();
  }

  save() {
    this.movieService.createTheater(this.theater).subscribe(data => console.log(data), error => console.log(error));
    this.theater = new Theater();
    this.reloadData();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  reloadData() {
    this.arr1 = this.movieService.getAllTheaters();
    this.gotoList();
    this.gotoList();
   }
  gotoList() {
    this.router.navigate(['view']);
  }


  

}
