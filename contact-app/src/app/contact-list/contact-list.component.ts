import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact_list:Array<Contact>;
  @Output() edit=new EventEmitter<Contact>();
  @Output() delete=new EventEmitter<Contact>();
  constructor(private contactService:ContactService) { 


  }

  ngOnInit() {
    this.contact_list = this.contactService.contact_list;
  }

  onEdit(c:Contact){
    this.edit.emit(c);
  }

  onDelete(c:Contact){
    this.delete.emit(c);
  }

}
