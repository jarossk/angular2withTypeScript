import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
  // getHeroes method stub
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 2000)
    );
  }
  // name: string 
  getHero(id: number) {
    return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}