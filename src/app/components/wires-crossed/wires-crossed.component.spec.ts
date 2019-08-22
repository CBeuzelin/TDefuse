import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiresCrossedComponent } from './wires-crossed.component';

describe('WiresCrossedComponent', () => {
  let component: WiresCrossedComponent;
  let fixture: ComponentFixture<WiresCrossedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiresCrossedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiresCrossedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
