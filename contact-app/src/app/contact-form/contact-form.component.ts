import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Contact } from "../contact";
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  // providers:[ContactService]
})
export class ContactFormComponent implements OnInit {

  @ViewChild('f') contactForm:NgForm;

  editableContact:Contact;

  constructor(private contactService:ContactService) {

   }
  ngOnInit() {
    // this.contactForm.valueChanges.subscribe(
    //   (data)=>{
    //   console.log(data);
    // });
    // this.contactForm.statusChanges.subscribe((data)=>{
    //   console.log(data);
    // })
    
  }

  onSubmit(form:NgForm){

    if(form.valid){
      if(this.editableContact==null){
      var c = new Contact(null);
      c.first_name = form.value.first_name;
      c.last_name = form.value.last_name;
      c.phone = form.value.phone;
      c.email = form.value.email;
      c.description = form.value.description;
      c.avatar = form.value.avatar;
      c.company = form.value.company;

      this.contactService.add(c);
    }
    else{
      
      this.editableContact.first_name = form.value.first_name;
      this.editableContact.last_name = form.value.last_name;
      this.editableContact.phone = form.value.phone;
      this.editableContact.email = form.value.email;
      this.editableContact.description = form.value.description;
      this.editableContact.avatar = form.value.avatar;
      this.editableContact.company = form.value.company;
      this.contactService.saveToLocalStorage();
      this.editableContact=null;
    }

      this.contactForm.reset();

    }
  }

  editContact(c:Contact){
    this.editableContact = c;
    this.contactForm.reset();
    this.contactForm.form.patchValue(this.editableContact);
  }

  onReset(){

    this.contactForm.reset();

    // this.contactForm.setValue({
    //   first_name:'kamil',
    //   last_name:'dingilov',
    //   phone:'123213',
    //   email:'asdsad',
    //   company:'asd',
    //   avatar:'asd',
    //   description:'asda'
    // });

    // this.contactForm.form.patchValue({
    //   first_name:'kamil'
    // });
  }

}
