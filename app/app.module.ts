import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtheaterComponent } from './addtheater/addtheater.component';
import { AddscreenComponent } from './addscreen/addscreen.component';
import { ViewtheaterComponent } from './viewtheater/viewtheater.component';
import { ViewscreenComponent } from './viewscreen/viewscreen.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatetheaterComponent } from './updatetheater/updatetheater.component';
import { UpdatescreenComponent } from './updatescreen/updatescreen.component';
import { LoginComponent } from './login/login.component';
//here we will specify the module and imports that we use across the application
//we will configure what we need, some are done by default like Components
@NgModule({
  declarations: [
    AppComponent,
    AddtheaterComponent,
    AddscreenComponent,
    ViewtheaterComponent,
    ViewscreenComponent,
    UpdatetheaterComponent,
    UpdatescreenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]//it automatically calls AppComponent class
})
export class AppModule { }
