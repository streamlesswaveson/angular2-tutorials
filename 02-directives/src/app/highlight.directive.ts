import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  // with the [] - this means it is an attribute selector
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  };

  @HostListener('click', ['$event']) onClick(event) {
    console.log('event?', event);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor = 'white';
  // adding the 'private' automically creates the
  // attribute on the class
  constructor(private elementRef: ElementRef, private renderer:Renderer) {
    // one way to do it
    // this.elementRef.nativeElement.style.backgroundColor = 'green';

    // the better way to do it
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','orange');


  }

}
