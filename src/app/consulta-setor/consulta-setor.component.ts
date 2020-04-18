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
  setores = []; //array vazio..
  endpointSetor = "http://localhost:53634/api/setor";
  access_token = "";

  //injeção de dependência
  constructor(private httpClient:HttpClient, 
              private cookieService:CookieService) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {    
    
    //lendo o valor do token armazenado em cookie
    this.access_token = this.cookieService.get('access_token');
    this.consultarSetores();
  }

  consultarSetores(){
    
    //montando o HEADER (cabeçalho) da requisição
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.access_token);

    this.httpClient.get(this.endpointSetor, {headers})
      .subscribe(
        (data:any[]) =>{
          this.setores = data;
        }
      );
  }

}
