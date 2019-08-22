import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiresVerticalComponent } from './wires-vertical.component';

describe('WiresVerticalComponent', () => {
  let component: WiresVerticalComponent;
  let fixture: ComponentFixture<WiresVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiresVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiresVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
