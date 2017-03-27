import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustardComponent } from './mustard.component';

describe('MustardComponent', () => {
  let component: MustardComponent;
  let fixture: ComponentFixture<MustardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
