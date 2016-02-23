System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            // import {HEROES} from './mock-heroes';
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this._heroesUrl = 'app/heroes';
                }
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
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this._heroesUrl)
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                HeroService.prototype.addHero = function (name) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._heroesUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                HeroService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead pf just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map