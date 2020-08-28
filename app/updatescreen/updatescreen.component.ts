import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Screen } from '../screen';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-updatescreen',
  templateUrl: './updatescreen.component.html',
  styleUrls: ['./updatescreen.component.css']
})
export class UpdatescreenComponent implements OnInit {
  id: number;
  submitted = false;
  id1: number;
  screen : Screen ;

  constructor(private service : MovieService,
    private router: Router , private route : ActivatedRoute) {
      

    }

  ngOnInit() {
    
    this.screen = new Screen();

    this.id = this.route.snapshot.params['id'];
 
   this.service.findScreenById(this.id).subscribe(data => {console.log(data) , this.screen = data; }, error => console.log(error));

   
  }

 view(){
  this.router.navigate(['view1',this.id1]);
  }

  updateScreenById()
  {
    
    console.log(this.screen);
    this.service.updateScreenById(this.screen).subscribe(data => console.log(data), error => console.log(error));
    this.id1=this.screen.theater.theaterId;
    this.screen = new Screen();
    this.view();
  }
  onSubmit() {
    this.updateScreenById();
    this.submitted = true;
  }

  gotoList(){
    this.router.navigate(['view']);
  }

}
