import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFuncaoComponent } from './consulta-funcao.component';

describe('ConsultaFuncaoComponent', () => {
  let component: ConsultaFuncaoComponent;
  let fixture: ComponentFixture<ConsultaFuncaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFuncaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
