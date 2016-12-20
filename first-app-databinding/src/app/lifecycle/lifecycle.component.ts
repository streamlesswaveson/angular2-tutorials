import { Component,
  Input,
  ViewChild,
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
  <ng-content></ng-content>
  <br/><br/>
  <p #boundParagraph>{{bindable}}</p>
  <p>{{boundParagraph.textContent}}</p>
  <br/>
  `,
  styles: []
})


export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy {

  constructor() { }

  @Input() bindable = 1000;

  // if we want access to the local 'boundParagraph' value in the template use ViewChild
  @ViewChild('boundParagraph')
  myBoundParagraph: HTMLElement;

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
    console.log(this.myBoundParagraph);
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
