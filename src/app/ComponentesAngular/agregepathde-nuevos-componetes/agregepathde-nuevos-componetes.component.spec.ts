import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregepathdeNuevosComponetesComponent } from './agregepathde-nuevos-componetes.component';

describe('AgregepathdeNuevosComponetesComponent', () => {
  let component: AgregepathdeNuevosComponetesComponent;
  let fixture: ComponentFixture<AgregepathdeNuevosComponetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregepathdeNuevosComponetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregepathdeNuevosComponetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
