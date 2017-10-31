import { Contact } from "./contact";

export class ContactService {
    // contact_list:Array<Contact>=new Array<Contact>();
    contact_list:Array<Contact>;
    
    constructor(){
        var json = localStorage.getItem('contacts');
        var temp_contact_list = <Array<Contact>>JSON.parse(json);
        console.log(this.contact_list);
        if(temp_contact_list==null){
            this.contact_list = new Array<Contact>();
        }
        else{
            this.contact_list = new Array<Contact>();
            temp_contact_list.forEach((c)=>{
                this.contact_list.push(new Contact(c));
            });
        }
    }

    add(contact:Contact){
        contact.id = this.contact_list.length+1;
        this.contact_list.push(contact);
        localStorage.setItem('contacts',JSON.stringify(this.contact_list));
    }

    saveToLocalStorage(){
        localStorage.setItem('contacts',JSON.stringify(this.contact_list));
    }

    delete(c:Contact){
        var index = this.contact_list.indexOf(c);
        this.contact_list.splice(index,1);
        this.saveToLocalStorage();
    }

    getById(id:number){
        // var contact = this.contact_list.find((c)=>{
        //     return c.id===id;
        // });
        var contact = null;

        for(var i=0;i<this.contact_list.length;i++){
            if(id==this.contact_list[i].id){
                contact=this.contact_list[i];
                break;
            }
        }

        return contact;
    }

}