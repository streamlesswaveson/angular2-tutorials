import { Component } from '@angular/core';

@Component({
  selector: 'hey-two-way-databinding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">

  `,
  styles: []
})
export class TwoWayDatabindingComponent {
  person = {
    name: 'Streamless',
    age: 42
  }
}
