import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
// import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {
  
  private _heroesUrl = 'app/heroes';

  constructor(private http: Http) { }
 /*
// hero.service promise-based
  getHeroes() {
    return this.http.get(this._heroesUrl)
                    .toPromise()
                    .then(res => <Hero[]> res.json().data, this.handleError)
                    .then(data => {console.log(data); return data; }) //eyeball results in the console
  }
  
  addHero(name: string) : Promise<Hero> {
    let body = JSON.stringify({name});
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this._heroesUrl, body, options) 
      .toPromise()
      .then(res => <Hero> res.json().data)
      .catch(this.handleError);  
  }  
  
  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error.message || error.json().error || 'Server error');
  }
*/
// hero.service (observable-based)  
  getHeroes() {
    return this.http.get(this._heroesUrl)
                    .map(res => <Hero[]> res.json().data)
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
  }
  
  addHero(name: string) : Observable<Hero> {
    let body = JSON.stringify({name});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this._heroesUrl, body, options)
                    .map(res => <Hero> res.json().data)
                    .catch(this.handleError)
  }
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead pf just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
