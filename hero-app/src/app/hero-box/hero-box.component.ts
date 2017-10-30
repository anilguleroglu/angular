import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from "../Hero";

@Component({
  selector: 'app-hero-box',
  templateUrl: './hero-box.component.html',
  styleUrls: ['./hero-box.component.css']
})
export class HeroBoxComponent implements OnInit {

  @Input() hero:Hero;
  @Output() onHeroSelect = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.onHeroSelect.emit(this.hero);
  }

}
