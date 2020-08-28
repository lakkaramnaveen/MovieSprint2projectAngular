import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theater } from './theater';
import {Screen} from './screen';
import { Login } from './login';
//we need to make necessary imports inorder to access some files
@Injectable({
  providedIn: 'root'
})
export class MovieService {
//these are the URL paths that we are going to use inorder to make a request 
   baseUrl = 'http://localhost:9090/theater/screen/';

   baseUrl1 = 'http://localhost:9090/theater/';


//we use HttpClientModule inorder to establish a connection between angular and sts
//we use HttpClient object to make the desired request 
  constructor(private http: HttpClient ){}
flag: string;

//the below methods are implemented for desired operations to perform with the controller
  
findScreen(id:number,name:string) {
 return this.http.get("http://localhost:9090/theater/screen/"+id+"/"+name,{observe:'response'});
}

findUserLogin(username: string,password :string) : Observable<Login>{
    return this.http.get<Login >("http://localhost:9090/admin/login/"+username+"/"+password);
  }

  //Observable is used because the data is accessed for a particular amount of time
  //and the controller methods will return data as response entity
  getAllScreens() : Observable<Screen []>
  {
      return this.http.get<Screen []>(`${this.baseUrl}`);
  }
   
  deleteScreenById(screenId : number) : Observable<Screen>
  {
    console.log(" Id = "+screenId);
    return this.http.delete<Screen>("http://localhost:9090/theater/screen/"+screenId);
  }
 

  getAllTheaters() : Observable<Theater[]>
  {
      return this.http.get<Theater[]>(`${this.baseUrl1}`);//
  }
  
  createTheater(theater: Theater): Observable<Theater> {
    return this.http.post<Theater>(`${this.baseUrl1}`, theater);//
  }
  
  findByTheaterId(theaterId : number) : Observable< Screen[]>
  {
    return this.http.get<Screen []>("http://localhost:9090/theater/screens/"+theaterId);//
  }
  
  createScreen(screen: Screen): Observable<Screen> {
    return this.http.post<Screen>(`${this.baseUrl}`, screen);

  }
  
  updateScreenById(screen:Screen): Observable<Screen> {
    return this.http.put<Screen>(`${this.baseUrl}`, screen);
  }

  updateTheaterById(theater:Theater): Observable<Theater> {
    return this.http.put<Theater>(`${this.baseUrl1}`, theater);//
  }

  deleteTheaterById(theaterId : number) : Observable<Theater>
  {
    return this.http.delete<Theater>("http://localhost:9090/theater/"+theaterId);//
  }
 
  findTheaterById(theaterId : number) : Observable<Theater>{
     return this.http.get<Theater>("http://localhost:9090/theater/"+theaterId);
  }

  findScreenById(screenId : number) : Observable<Screen> {
    return this.http.get<Screen>("http://localhost:9090/theater/screen/"+screenId);

  }

}
