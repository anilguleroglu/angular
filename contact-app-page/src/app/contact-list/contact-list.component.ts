import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact_list:Array<Contact>;
  constructor(private contactService:ContactService,private router:Router) { 


  }

  ngOnInit() {
    this.contact_list = this.contactService.contact_list;
  }

  onEdit(c:Contact){
    this.router.navigate(['edit',c.id]);
  }

  onDetail(c:Contact){
    this.router.navigate(['detail',c.id]);
  }

}
