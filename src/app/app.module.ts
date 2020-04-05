import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroFuncaoComponent } from './cadastro-funcao/cadastro-funcao.component';
import { CadastroSetorComponent } from './cadastro-setor/cadastro-setor.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ConsultaSetorComponent } from './consulta-setor/consulta-setor.component';
import { ConsultaFuncaoComponent } from './consulta-funcao/consulta-funcao.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';

//importando a biblioteca de rotas
import { RouterModule, Routes } from '@angular/router';

//importando a biblioteca para fazer chmadas a uma API
import { HttpClientModule } from '@angular/common/http';

//importando a biblioteca para criar formularios dinamicos no projeto
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//mapear uma rota para cada componente / página
const appRoutes : Routes = [
  { path : 'cadastro-funcao', component: CadastroFuncaoComponent },
  { path : 'cadastro-setor', component: CadastroSetorComponent },
  { path : 'cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path : 'consulta-funcao', component: ConsultaFuncaoComponent },
  { path : 'consulta-setor', component: ConsultaSetorComponent },
  { path : 'consulta-funcionario', component: ConsultaFuncionarioComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncaoComponent,
    CadastroSetorComponent,
    CadastroFuncionarioComponent,
    ConsultaSetorComponent,
    ConsultaFuncaoComponent,    
    ConsultaFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    //registrando as rotas mapeadas
    RouterModule.forRoot(appRoutes),
    //registrar as bibliotecas Http e Forms
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
