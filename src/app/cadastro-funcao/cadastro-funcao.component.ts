import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cadastro-funcao',
  templateUrl: './cadastro-funcao.component.html',
  styleUrls: ['./cadastro-funcao.component.css']
})
export class CadastroFuncaoComponent implements OnInit {

  //atributos..
  mensagem:string;
  endpointFuncao = "http://localhost:53634/api/funcao";

  access_token = "";

  //declarando HttpClient e fazendo injeção de dependência
  constructor(private httpClient:HttpClient,
              private cookieService:CookieService) { }

  ngOnInit(): void {
    this.access_token = this.cookieService.get('access_token');
  }

  cadastrarFuncao(formCadastro){
    this.mensagem = "Processando, por favor aguarde.";

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.access_token)

    //realizando a chamada para a API..
    this.httpClient.post
      (this.endpointFuncao, formCadastro.value, {headers})
      .subscribe(
        (data:any) => {
          this.mensagem = data.mensagem;
          formCadastro.reset();
        }
      )
  }

}
