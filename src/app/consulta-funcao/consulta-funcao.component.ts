import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-funcao',
  templateUrl: './consulta-funcao.component.html',
  styleUrls: ['./consulta-funcao.component.css']
})
export class ConsultaFuncaoComponent implements OnInit {

  //atributo
  funcoes = []; //array vazio..

  //injeção de dependência
  constructor(private httpClient:HttpClient) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {

    this.httpClient.get("http://localhost:53634/api/funcao")
      .subscribe(
        (data:any[]) =>{
          this.funcoes = data;
        }
      );

  }

}
