// Technically, a component is a class that controls a view template
import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

// metadata
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/views/heroes.component.html',
  styleUrls: ['app/css/heroes.component.css'],
  directives: [HeroDetailComponent]
  //providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  //  (_) to warn readers of our code that this variable  
  // is not part of the component's public API
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
    
  getHeroes() {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
 }
/*
The Component class
At the bottom of the file is an empty, do-nothing class named AppComponent. 
When we're ready to build a substantive application, we can expand this class 
with properties and application logic. Our AppComponent class is empty because 
we don't need it to do anything in this QuickStart.

Modules
Angular apps are modular. They consist of many files each dedicated to a purpose.
Most application files export one thing such as a component. Our app.component 
file exports the AppComponent.
*/