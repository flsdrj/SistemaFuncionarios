import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.css']
})
export class ConsultaFuncionarioComponent implements OnInit {

  //atributo
  funcionarioEdicao = {
    idFuncionario : 0,
    nome : '',
    salario : '',
    dataAdmissao : '',
    idSetor : 0,
    idFuncao : 0
  }; 

  access_token="";
  headers:HttpHeaders;

  funcionarios = []; //array vazio..
  setores = []; //array vazio..
  funcoes = []; //array vazio..

  mensagem:string;
  mensagemEdicao:string;

  endpointFuncionario = "http://localhost:53634/api/funcionario";
  endpointSetor = "http://localhost:53634/api/setor";
  endpointFuncao = "http://localhost:53634/api/funcao";

  //injeção de dependência
  constructor(private httpClient: HttpClient,
    private cookieService:CookieService) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {

    this.access_token = this.cookieService.get('access_token');
    this.headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.access_token);


    this.consultarFuncionarios();
    this.consultarSetores();
    this.consultarFuncoes();
  }

  consultarFuncionarios() {

    const headers = this.headers;

    this.httpClient.get(this.endpointFuncionario, {headers})
      .subscribe(
        (data: any[]) => {
          this.funcionarios = data;
        }
      );
  }

  consultarSetores() {

    const headers = this.headers;

    this.httpClient.get(this.endpointSetor, {headers})
      .subscribe(
        (data: any[]) => {
          this.setores = data;
        }
      );
  }

  consultarFuncoes() {

    const headers = this.headers;

    this.httpClient.get(this.endpointFuncao, {headers})
      .subscribe(
        (data: any[]) => {
          this.funcoes = data;
        }
      );
  }

  excluirFuncionario(id) {
    if (window.confirm('Deseja realmente excluir o funcionário?')) {

      const headers = this.headers;

      this.httpClient.delete(this.endpointFuncionario + "/" + id, {headers})
        .subscribe(
          (data: any) => {
            this.mensagem = data.mensagem;
            this.consultarFuncionarios();
          }
        );
    }
  }

  exibirFuncionario(id){
    
    const headers = this.headers;

    this.httpClient.get(this.endpointFuncionario + "/" + id, {headers} )
      .subscribe(
        (data: any) => {
          this.funcionarioEdicao = data;
          this.mensagemEdicao = "";
        }
      );

  }

  atualizarFuncionario(formEdicao){

    const headers = this.headers;
    
    this.mensagemEdicao = "Processando, por favor aguarde...";

    this.httpClient.put(this.endpointFuncionario, formEdicao.value, {headers})
    .subscribe(
      (data: any) =>{
        this.mensagemEdicao = data.mensagem;
        this.consultarFuncionarios();
      }
    );

  }
}
