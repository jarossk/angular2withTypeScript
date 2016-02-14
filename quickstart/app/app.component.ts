// Technically, a component is a class that controls a view template
import {Component} from 'angular2/core';

// metadata
@Component({
  selector: 'my-app',
  template: '<h1>My first Angular 2 App with TypeScript</h1>'
})

export class AppComponent { }

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