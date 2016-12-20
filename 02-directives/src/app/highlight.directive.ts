import { Directive, ElementRef, OnInit, Input, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  // with the [] - this means it is an attribute selector
  selector: '[dirHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostListener('click', ['$event']) onClick(event) {
    console.log('event?', event);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  // adding the 'private' automically creates the
  // attribute on the class
  constructor(private elementRef: ElementRef, private renderer:Renderer) {
    // one way to do it
    // this.elementRef.nativeElement.style.backgroundColor = 'green';

    // the better way to do it
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','orange');


  }

}
