import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  //atributos
  setores = []; //array vazio
  funcoes = []; //array vazio
  mensagem: string;

  access_token = "";
  headers: HttpHeaders;

  endpointSetor = "http://localhost:53634/api/setor";
  endpointFuncao = "http://localhost:53634/api/funcao";
  endpointFuncionario = "http://localhost:53634/api/funcionario";

  //injeção de dependência do HttpClient
  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) { }

  //método executado sempre que o componente é renderizado
  ngOnInit(): void {

    this.access_token = this.cookieService.get('access_token');
    this.headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.access_token);

    this.consultarFuncoes();
    this.consultarSetores();
  }

  consultarSetores() {

    const headers = this.headers;

    //acessar a API para consultar setores..
    this.httpClient.get(this.endpointSetor, {headers})
      .subscribe(
        (data: any[]) => {
          this.setores = data;
        }
      );
  }

  consultarFuncoes() {

    const headers = this.headers;

    //acessar a API para consultar funções..
    this.httpClient.get(this.endpointFuncao, {headers})
      .subscribe(
        (data: any[]) => {
          this.funcoes = data;
        }
      );
  }

  cadastrarFuncionario(formCadastro) {

    this.mensagem = "Processando, por favor aguarde...";

    const headers = this.headers;

    //realizando uma chamada POST para a API..
    this.httpClient.post
      (this.endpointFuncionario, formCadastro.value, {headers})
      .subscribe(
        (data: any) => {
          this.mensagem = data.mensagem;
          formCadastro.reset();
        }
      )

  }

}
