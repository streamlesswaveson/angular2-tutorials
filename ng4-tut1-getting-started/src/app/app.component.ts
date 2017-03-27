import { Component } from '@angular/core';
import {JimmyService} from './jimmy.service';
import {Response } from '@angular/http';

// tslint complains about not having app- for the selector
// but you can name the selector anything you want
@Component({
  selector: 'app-cheeseburger-in-paradise',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cheeseburger in paradise!';
  burgers: any[];

  constructor(private jimmyService: JimmyService) {

  }

  onSave() {
    this.jimmyService
      .storeBurger({name: 'Something ' + this.generateId()})
      .subscribe(
        (response) => console.log('your response', response),
        (error) => console.error('your error', error)
      );
  }

  onGet() {
    this.jimmyService
      .getBurgers()
      .subscribe(
        (response: any[]) => {
          console.log('response', response);
          this.burgers = response;
        },
        (error) => {
          console.error('error', error);
        }
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
