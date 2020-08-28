import { Component, OnInit } from '@angular/core';
import { Theater } from '../theater';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatetheater',
  templateUrl: './updatetheater.component.html',
  styleUrls: ['./updatetheater.component.css']
})
export class UpdatetheaterComponent implements OnInit {
  
  id: number;
  submitted = false;
  theater1 : Theater ;
  constructor(private service : MovieService,
    private router: Router , private route : ActivatedRoute) {
      

    }

  ngOnInit() {

    this.theater1 = new Theater();

    this.id = this.route.snapshot.params['id'];
//console.log(data) ,
    this.service.findTheaterById(this.id).subscribe(data => { this.theater1 = data; }, error => console.log(error));
    
  }
 
 view(){
  this.router.navigate(['view']);
  }
//error function is used to handle the exceptions
  updateTheaterById()
  {
    this.service.updateTheaterById(this.theater1).subscribe(data => console.log(data), error => console.log(error));
    this.theater1 = new Theater();
    this.view();
  }
  onSubmit() {
    this.updateTheaterById();
    this.submitted = true;
  }

  gotoList(){
    this.router.navigate(['view']);
  }
  
 
}
