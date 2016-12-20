import { Component, Input } from '@angular/core';

@Component({
  selector: 'hey-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent {
  // makes 'result' bindable from outside
  @Input() result: number = 0;
}
