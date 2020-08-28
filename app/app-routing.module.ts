import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtheaterComponent } from './addtheater/addtheater.component';
import { AddscreenComponent } from './addscreen/addscreen.component';
import { ViewtheaterComponent } from './viewtheater/viewtheater.component';
import { ViewscreenComponent } from './viewscreen/viewscreen.component';
import { UpdatetheaterComponent } from './updatetheater/updatetheater.component';
import { UpdatescreenComponent } from './updatescreen/updatescreen.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';

//this is where we specify all the routes and uri path
//we also used Authguard service canActivate method in constant
const routes: Routes = [
  {
    path : 'add',
    component : AddtheaterComponent,
   }
   ,
   {
    path : 'add1/:id',
    component : AddscreenComponent,
   },
   {
     path : 'view',
     component : ViewtheaterComponent,
     canActivate : [AuthguardService]
    },
    {
      path : 'view1/:id',
      component : ViewscreenComponent
     },
     {
       path: 'update/:id',
       component: UpdatetheaterComponent

     },

     {
       path: 'update1/:id',
       component:UpdatescreenComponent
     },
    {
     path : 'login',
     component : LoginComponent
    },
    {
      path : '',
      redirectTo : '/login',
      pathMatch : 'full'
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
