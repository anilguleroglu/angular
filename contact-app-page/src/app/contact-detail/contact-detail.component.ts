import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ContactService } from "../contact.service";
import { Contact } from "../contact";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private contactService:ContactService,private router:Router,private route:ActivatedRoute) { }

  contact:Contact;
  ngOnInit() {

    var id = this.route.snapshot.params['id'];
    this.contact = this.contactService.getById(id);
    this.route.params.subscribe((params)=>{
      var id = params['id'];
      this.contact = this.contactService.getById(id);
    })
  }

  onEdit(){
    this.router.navigate(['edit',this.contact.id]);
  }
  
  onDelete(){
    var c = confirm("Silmek istediğinize emin misiniz?");

    if(c){
      this.contactService.delete(this.contact);
      this.router.navigate(['list']);
    }
  }
}
