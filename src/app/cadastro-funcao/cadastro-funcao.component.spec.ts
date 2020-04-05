import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFuncaoComponent } from './cadastro-funcao.component';

describe('CadastroFuncaoComponent', () => {
  let component: CadastroFuncaoComponent;
  let fixture: ComponentFixture<CadastroFuncaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFuncaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
