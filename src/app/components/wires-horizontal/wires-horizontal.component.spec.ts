import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiresHorizontalComponent } from './wires-horizontal.component';

describe('WiresHorizontalComponent', () => {
  let component: WiresHorizontalComponent;
  let fixture: ComponentFixture<WiresHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiresHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiresHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
