import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroFuncaoComponent } from './cadastro-funcao/cadastro-funcao.component';
import { CadastroSetorComponent } from './cadastro-setor/cadastro-setor.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ConsultaSetorComponent } from './consulta-setor/consulta-setor.component';
import { ConsultaFuncaoComponent } from './consulta-funcao/consulta-funcao.component';
import { ConsultaFuncionarioComponent } from './consulta-funcionario/consulta-funcionario.component';
import { AcessoUsuariosComponent } from './acesso-usuarios/acesso-usuarios.component';

//importando a biblioteca de rotas
import { RouterModule, Routes } from '@angular/router';

//importando a biblioteca para fazer chamadas à uma API
import { HttpClientModule } from '@angular/common/http';

//importando a biblioteca para criar formulários dinamicos no projeto
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando a biblioteca para gravação de cookies
import { CookieService } from 'ngx-cookie-service';

//mapear uma rota para cada componente / página
const appRoutes : Routes = [
  { path : 'cadastro-funcao', component: CadastroFuncaoComponent },
  { path : 'cadastro-setor', component: CadastroSetorComponent },
  { path : 'cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path : 'consulta-funcao', component: ConsultaFuncaoComponent },
  { path : 'consulta-setor', component: ConsultaSetorComponent },
  { path : 'consulta-funcionario', component: ConsultaFuncionarioComponent },
  { path : 'acesso-usuario', component: AcessoUsuariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncaoComponent,
    CadastroSetorComponent,
    CadastroFuncionarioComponent,
    ConsultaSetorComponent,
    ConsultaFuncaoComponent,
    ConsultaFuncionarioComponent,
    AcessoUsuariosComponent
  ],
  imports: [  
    BrowserModule,
    //registrando as rotas mapeadas
    RouterModule.forRoot(appRoutes),
    //registrando as bibliotecas Http e Forms
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
