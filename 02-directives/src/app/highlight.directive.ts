import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  // with the [] - this means it is an attribute selector
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  // adding the 'private' automically creates the
  // attribute on the class
  constructor(private elementRef: ElementRef, private renderer:Renderer) {
    // one way to do it
    // this.elementRef.nativeElement.style.backgroundColor = 'green';

    // the better way to do it
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','orange');
  }

}
