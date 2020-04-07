import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.css']
})
export class ConsultaFuncionarioComponent implements OnInit {

  //atributo
  funcionarios = []; //array vazio..

  //injeção de dependência
  constructor(private httpClient:HttpClient) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {

    this.httpClient.get("http://localhost:53634/api/funcionario")
      .subscribe(
        (data:any[]) =>{
          this.funcionarios = data;
        }
      );

  }

}
