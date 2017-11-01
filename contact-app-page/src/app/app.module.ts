import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from "./contact.service";
import {AuthService} from './auth.service';
import { ContactListComponent } from './contact-list/contact-list.component';

import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import {WeatherService} from './weather.service';

import {AuthGuard} from './authguard.service';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'list',component:ContactListComponent,canActivate:[AuthGuard]},
  {path:'new',component:ContactFormComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:ContactFormComponent,canActivate:[AuthGuard]},
  {path:'detail/:id',component:ContactDetailComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    HomeComponent,
    ContactDetailComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule//import {HttpModule} from '@angular/http';
  ],
  providers: [ContactService,AuthService,AuthGuard,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
