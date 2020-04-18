import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-consulta-funcao',
  templateUrl: './consulta-funcao.component.html',
  styleUrls: ['./consulta-funcao.component.css']
})
export class ConsultaFuncaoComponent implements OnInit {

  //atributo
  funcoes = []; //array vazio..
  endpointFuncao = "http://localhost:53634/api/funcao";
  access_token = "";

  //injeção de dependência
  constructor(private httpClient:HttpClient,
    private cookieService:CookieService) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {
    //lendo o valor do token armazenado em cookie
    this.access_token = this.cookieService.get('access_token');  

    this.consultarFuncao();    

  }

  consultarFuncao(){

    //montando o HEADER (cabeçalho) da requisição
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.access_token);

    this.httpClient.get(this.endpointFuncao, {headers} )
      .subscribe(
        (data:any[]) =>{
          this.funcoes = data;
        }
      );
    
  }
  

}
