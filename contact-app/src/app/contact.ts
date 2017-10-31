export class Contact{
    id:number;
    first_name:string;
    last_name:string;
    phone:string;
    email:string;
    company:string;
    avatar:string;
    description:string;

    getAvatar(){
        if(this.avatar!=null && this.avatar!=''){
            return this.avatar;
        }
        else{
            return 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';
        }
    }
    fullname(){
        return this.first_name+' '+this.last_name;
    }

    constructor(obj:any){
        if(obj!=null){
            this.id = obj.id;
            this.avatar = obj.avatar;
            this.first_name = obj.first_name;
            this.last_name = obj.last_name;
            this.phone = obj.phone;
            this.email = obj.email;
            this.description = obj.description;
            this.company = obj.company;
        }
    }
}