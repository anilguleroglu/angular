import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBoxComponent } from './hero-box.component';

describe('HeroBoxComponent', () => {
  let component: HeroBoxComponent;
  let fixture: ComponentFixture<HeroBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
