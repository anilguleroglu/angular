import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Contact } from "../contact";
import { ContactService } from "../contact.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  // providers:[ContactService]
})
export class ContactFormComponent implements OnInit {

  @ViewChild('f') contactForm:NgForm;

  editableContact:Contact;

  constructor(private contactService:ContactService,private router:Router,private route:ActivatedRoute) {
    this.editableContact = new Contact(null);
   }
  ngOnInit() {
    // this.contactForm.valueChanges.subscribe(
    //   (data)=>{
    //   console.log(data);
    // });
    // this.contactForm.statusChanges.subscribe((data)=>{
    //   console.log(data);
    // })

    // var id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params)=>{
      var id = params['id'];
      if(id!=null){
        var c = this.contactService.getById(id);
        setTimeout(()=> {
          this.editContact(c);
        }, 100);
      }
      else{
        this.editableContact=null;
      }
    });

    // if(id!=null){
    //   var c = this.contactService.getById(id);
    //   this.editContact(c);
    // }
    
  }

  onSubmit(form:NgForm){

    if(form.valid){
      console.log(this.editableContact);
      if(this.editableContact==null){

      var c = new Contact(null);
      c.first_name = form.value.first_name;
      c.last_name = form.value.last_name;
      c.phone = form.value.phone;
      c.email = form.value.email;
      c.description = form.value.description;
      c.avatar = form.value.avatar;
      c.company = form.value.company;
      console.log(c);
      this.contactService.add(c);
      this.router.navigate(['list']);
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
      this.router.navigate(['list']);
    }

      this.contactForm.reset();

    }
  }

  editContact(c:Contact){
    // console.log(c);
    this.editableContact = c;
    // this.contactForm.reset();
    // this.contactForm.form.patchValue(c);
    this.contactForm.form.patchValue(c);
    console.log(this.editableContact);
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
