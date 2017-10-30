export class Hero{
    name:string;
    picture:string;
    secret_identity:string;
    super_power:string;

    constructor(name:string,picture:string,secret_identity:string,super_power:string){
        this.name=name;
        this.picture=picture;
        this.secret_identity = secret_identity;
        this.super_power = super_power;
    }
}