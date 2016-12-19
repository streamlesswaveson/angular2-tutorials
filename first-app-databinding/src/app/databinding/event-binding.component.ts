import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hey-event-binding',
  template: `
  <button (click)="onClicked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent  {
  onClicked() {
    this.clicked.emit('it worked');
  }

  // with the @Output decorator, this is now
  // listenable outside of the component
  @Output() clicked = new EventEmitter<string>();
}
