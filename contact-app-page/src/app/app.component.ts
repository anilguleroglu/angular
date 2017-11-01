import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from "./contact.service";
import { Contact } from "./contact";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[ContactService]
})
export class AppComponent implements OnInit {

  contact_list:Array<Contact>;
  selectedContact:Contact;
  isAuthenticated = false;

  @ViewChild('contactForm') contactForm:ContactFormComponent;

  constructor(private contactService:ContactService,private authService:AuthService){
    
    this.authService.statusChanged.subscribe((status)=>{
      this.isAuthenticated=status;
    });
    
  }

  ngOnInit(): void {

    


    this.contact_list = this.contactService.contact_list;
  }


  onEdit(c:Contact){
    this.contactForm.editContact(c);
  }

  onDelete(c:Contact){
    var cfr = confirm(c.fullname()+' kişisini silmek istediğine emin misin?');

    if(cfr){
      this.contactService.delete(c);
    }
  }
  
}
