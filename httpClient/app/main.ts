import {bootstrap} from 'angular2/platform/browser';
// Add all operators to Observable
import 'rxjs/Rx';
// When another module needs to refer to AppComponent, it imports the AppComponent
import {AppComponent} from './toh/app.component';
import {WikiComponent} from './wiki/wiki.component';

bootstrap(AppComponent);
bootstrap(WikiComponent);
