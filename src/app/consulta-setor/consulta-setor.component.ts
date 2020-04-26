import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-consulta-setor',
  templateUrl: './consulta-setor.component.html',
  styleUrls: ['./consulta-setor.component.css']
})
export class ConsultaSetorComponent implements OnInit {

  //atributos
  setorEdicao = {
    idSetor : 0,
    nome : ''    
  };
  
  setores = []; //array vazio..
  endpointSetor = "http://localhost:53634/api/setor";
  
  access_token = "";
  headers:HttpHeaders;
   
  mensagem:string;
  mensagemEdicao:string;

  //injeção de dependência
  constructor(private httpClient:HttpClient, 
              private cookieService:CookieService) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {    
    
    //lendo o valor do token armazenado em cookie
    this.access_token = this.cookieService.get('access_token');

    //montando o HEADER (cabeçalho) da requisição
    this.headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.access_token);

    this.consultarSetores();
  }

  consultarSetores(){
        
    const headers = this.headers;

    this.httpClient.get(this.endpointSetor, {headers})
      .subscribe(
        (data:any[]) =>{
          this.setores = data;
        }
      );
  } 

  excluirSetor(id) {
    if (window.confirm('Deseja realmente excluir o setor?')) {

      const headers = this.headers;

      this.httpClient.delete(this.endpointSetor + "/" + id, {headers})
        .subscribe(
          (data: any) => {
            this.mensagem = data.mensagem;
            this.consultarSetores();
          }
        );
    }
  }

  exibirSetor(id){
    
    const headers = this.headers;

    this.httpClient.get(this.endpointSetor + "/" + id, {headers} )
      .subscribe(
        (data: any) => {
          this.setorEdicao = data;
          this.mensagemEdicao = "";
        }
      );

  }

  atualizarSetor(formEdicao){

    const headers = this.headers;
    
    this.mensagemEdicao = "Processando, por favor aguarde...";

    this.httpClient.put(this.endpointSetor, formEdicao.value, {headers})
    .subscribe(
      (data: any) =>{
        this.mensagemEdicao = data.mensagem;
        this.consultarSetores();
      }
    );

  }

}
