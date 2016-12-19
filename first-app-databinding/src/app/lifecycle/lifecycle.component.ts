import { Component,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  OnInit } from '@angular/core';

@Component({
  selector: 'hey-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})


export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnChanges');

  }

  ngDoCheck() {
    this.log('ngDoCheck');

  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');

  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');

  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');

  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');

  }
  ngOnDestroy(){
    this.log('ngOnDestroy');

  }

  private log(message: string){
    console.log(message);
  }

}
