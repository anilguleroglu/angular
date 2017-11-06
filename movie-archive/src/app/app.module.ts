import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HttpModule} from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import {MovieService} from './services/movie.service';
import {AuthService} from './services/auth.service';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import {CommentService} from './services/comment.service';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
//anil.guleroglu@bilgeadam.com
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService,AuthService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
