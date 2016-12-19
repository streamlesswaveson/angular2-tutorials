
// One important note here is: No matter if you import some @angular
// package/ module or code from your own file, you never add the file extension
// in the import.
import { Component } from '@angular/core';


// Decorators are basically functions which get attached to other code - in this case to a class.
// A decorator simply leads to the execution of some code in the background which "does something".
 // Here, the @Component()  decorator takes a JavaScript object as an argument and uses this argument
 // to add some metadata (in the background) to this class.

// That makes this class a Component which Angular 2 can recognize.

// Angular 2 uses Decorators a lot (not only for Components) and you may simply
// keep in mind that Decorators "do something in the background and transform whatever
// they are attached to, to something else Angular 2 knows (like a Component)".

@Component({

  // i.e. <app-root></app-root>
  selector: 'app-root',
  // OR it could be '#app-root' => <div id="app-root">
  // templates are not optional
  // templateUrl: './app.component.html',

// note the backticks
  template: `
    <h1>here is an inline template</h1>
    <hey-other></hey-other>
    <hey-another><hey-another>
  `,
  // styling is optional
  // styleUrls: ['./app.component.css']

 // inline styles example - also note the backticks
  styles: [`
    h1 {
      color: red;
    }
    `]
})

// Classes is a feature added by TypeScript which makes the creation of objects easier.
 // You can think of a class as a blueprint for JS objects. Note that you rarely
 // instantiate classes (= create objects based on them) yourself in an Angular 2 app.
 // Most of the time, Angular 2 will do that for you.
export class AppComponent {
  title = 'hey hey hey';
}
