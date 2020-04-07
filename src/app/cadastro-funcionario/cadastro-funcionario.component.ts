import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  //atributos
  setores = []; //array vazio
  funcoes = []; //array vazio
  mensagem:string;

  //injeção de dependência do HttpClient
  constructor(private httpClient: HttpClient) { }

  //método executado sempre que o componente é renderizado
  ngOnInit(): void {

    //acessar a API para consultar setores..
    this.httpClient.get("http://localhost:53634/api/setor")
      .subscribe(
        (data: any[]) => {
          this.setores = data;
        }
      );

    //acessar a API para consultar funções..
    this.httpClient.get("http://localhost:53634/api/funcao")
      .subscribe(
        (data: any[]) => {
          this.funcoes = data;
        }
      );
  }

  cadastrarFuncionario(formCadastro){

    this.mensagem = "Processando, por favor aguarde...";

    //realizando uma chamada POST para a API..
    this.httpClient.post("http://localhost:53634/api/funcionario", 
      formCadastro.value)
      .subscribe(
        (data:any) =>{
          this.mensagem = data.mensagem;
          formCadastro.reset();
        }
      )
    
  }

}
