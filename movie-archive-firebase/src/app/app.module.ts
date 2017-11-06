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

import * as firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC9XVey3rLVTCOaMN_q2cS4Zq-_Js0LL7k",
      authDomain: "test-01-1c547.firebaseapp.com",
      databaseURL: "https://test-01-1c547.firebaseio.com",
      projectId: "test-01-1c547",
      storageBucket: "test-01-1c547.appspot.com",
      messagingSenderId: "552243058331"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MovieService,AuthService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
