import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-box',
  templateUrl: './hero-box.component.html',
  styleUrls: ['./hero-box.component.css']
})
export class HeroBoxComponent implements OnInit {

  @Input() hero:Hero;
  @Output() heroSelect=new EventEmitter<Hero>();
  @Output() heroDelete=new EventEmitter<Hero>();
  constructor() { }

  ngOnInit() {
    // this.hero = new Hero('Unknown','','','');
  }

  onSelect(){
    this.heroSelect.emit(this.hero);
  }

  onDelete(){
    this.heroDelete.emit(this.hero);
  }

}
