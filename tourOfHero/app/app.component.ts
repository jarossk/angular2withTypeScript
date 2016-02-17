// Technically, a component is a class that controls a view template
import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

// metadata
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
       <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
     <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      postion: relative;
      top: -3px;
    } 
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
  directives: [HeroDetailComponent]
})

export class AppComponent {
  public title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
 }
 
 var HEROES: Hero[] = [
   {"id": 11, "name": "MR. Nice"},
   {"id": 12, "name": "Narco"},
   {"id": 13, "name": "Bombasto"},
   {"id": 14, "name": "Celeritas"},
   {"id": 15, "name": "Magneta"},
   {"id": 16, "name": "RubberMan"},
   {"id": 17, "name": "Dynama"},
   {"id": 18, "name": "Dr IQ"},
   {"id": 19, "name": "Magma"},
   {"id": 20, "name": "Tornado"}
 ];

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