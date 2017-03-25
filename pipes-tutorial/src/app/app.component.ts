import { Component } from '@angular/core';
// import { DoublePipe } from './double.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  pipes = 'lowercase';
  mydate = new Date();
  bazinga = 10;
  myvalues = ['milk','bread','beans','carrots','mayo','oranges'];

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('data is here!'), 2000);
  });
}
