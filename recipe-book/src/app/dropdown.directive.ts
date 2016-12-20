import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  // bind to the opened property
  // bootstrap ships with the 'open' class
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  @HostListener('click') open() {
    this.isOpen = true;
  }
  private isOpen = false;
  constructor() { }

}
