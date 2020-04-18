import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoUsuariosComponent } from './acesso-usuarios.component';

describe('AcessoUsuariosComponent', () => {
  let component: AcessoUsuariosComponent;
  let fixture: ComponentFixture<AcessoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
