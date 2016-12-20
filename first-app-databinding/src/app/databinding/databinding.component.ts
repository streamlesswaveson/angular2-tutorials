import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hey-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = 'this is string interpoloation';
  numberInterpolation = 42;

  onSomething() {
    return true;
  }

  onFooBaz(value: string){
    alert(`foo baz sez ${value}`);
  }
}
