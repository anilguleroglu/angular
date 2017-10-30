export class Hero{
    index:number;
    name:string;
    secret_identity:string;
    description:string;
    image:string;
    constructor(index:number,name:string,secret_identity:string,description:string,image:string){
        this.index = index;
        this.name = name;
        this.secret_identity = secret_identity;
        this.description = description;
        this.image = image;
    }
}