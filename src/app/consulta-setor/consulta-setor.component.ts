import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-consulta-setor',
  templateUrl: './consulta-setor.component.html',
  styleUrls: ['./consulta-setor.component.css']
})
export class ConsultaSetorComponent implements OnInit {

  //atributo
  setores = []; //array vazio..

  //injeção de dependência
  constructor(private httpClient:HttpClient) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {

    this.httpClient.get("http://localhost:53634/api/setor")
      .subscribe(
        (data:any[]) =>{
          this.setores = data;
        }
      );

  }

}
