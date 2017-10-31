import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from "./contact.service";
import { ContactListComponent } from './contact-list/contact-list.component';

import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'list',component:ContactListComponent},
  {path:'new',component:ContactFormComponent},
  {path:'edit/:id',component:ContactFormComponent},
  {path:'detail/:id',component:ContactDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    HomeComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
