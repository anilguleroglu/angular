import { Hero } from "./Hero";

export class HeroService {

    heroes:Array<Hero> = [
        new Hero("Superman"
        ,"http://www.eonline.com/resize/200/200//eol_images/Entire_Site/201095/300.superman.lc.100510.jpg"
        ,"Clark Kent"
        ,"Being Super"),
        new Hero("Batman"
        ,"http://www5.pcmag.com/media/images/420382-419409-batman-arkham-knight-credit-rocksteady-studios-gameinformer.jpg?thumb=y"
        ,"Bruce Wayne"
        ,"Gadgetry and Being a Badass"),
        new Hero("Ant-Man"
        ,"http://www.gannett-cdn.com/-mm-/4cf088e495b84b01d6fe9784ea5c16f3e7f2ffc4/c=33-0-368-335&r=x203&c=200x200/local/-/media/WXIA/WXIA/2014/11/07/635509926335310058-ant-man1107b.jpg"
        ,"Scott Lang"
        ,"Strong Man in a Little Suit"),
        new Hero("The Tick"
        ,"http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/The-Tick-496029.jpg"
        ,"Unknown"
        ,"Dense"),
    ];

    getHeroes(){
        return this.heroes;
    }

}