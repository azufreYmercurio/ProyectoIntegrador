import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosNuvoProComponent } from './datos-nuvo-pro.component';

describe('DatosNuvoProComponent', () => {
  let component: DatosNuvoProComponent;
  let fixture: ComponentFixture<DatosNuvoProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosNuvoProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosNuvoProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
