import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSetorComponent } from './consulta-setor.component';

describe('ConsultaSetorComponent', () => {
  let component: ConsultaSetorComponent;
  let fixture: ComponentFixture<ConsultaSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
