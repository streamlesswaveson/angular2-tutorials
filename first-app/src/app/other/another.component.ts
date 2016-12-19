import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hey-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
