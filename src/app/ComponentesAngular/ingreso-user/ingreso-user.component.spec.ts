import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoUSerComponent } from './ingreso-user.component';

describe('IngresoUSerComponent', () => {
  let component: IngresoUSerComponent;
  let fixture: ComponentFixture<IngresoUSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoUSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
