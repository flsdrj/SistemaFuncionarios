import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  funcionarios = []; //array vazio..
  setores = []; //array vazio..
  funcoes = []; //array vazio..

  mensagem:string;
  mensagemEdicao:string;

  endpointFuncionario = "http://localhost:53634/api/funcionario";
  endpointSetor = "http://localhost:53634/api/setor";
  endpointFuncao = "http://localhost:53634/api/funcao";

  //injeção de dependência
  constructor(private httpClient: HttpClient) { }

  //função executada sempre que o componente for renderizado
  ngOnInit(): void {
    this.consultarFuncionarios();
    this.consultarSetores();
    this.consultarFuncoes();
  }

  consultarFuncionarios() {
    this.httpClient.get(this.endpointFuncionario)
      .subscribe(
        (data: any[]) => {
          this.funcionarios = data;
        }
      );
  }

  consultarSetores() {
    this.httpClient.get(this.endpointSetor)
      .subscribe(
        (data: any[]) => {
          this.setores = data;
        }
      );
  }

  consultarFuncoes() {
    this.httpClient.get(this.endpointFuncao)
      .subscribe(
        (data: any[]) => {
          this.funcoes = data;
        }
      );
  }

  excluirFuncionario(id) {
    if (window.confirm('Deseja realmente excluir o funcionário?')) {
      this.httpClient.delete(this.endpointFuncionario + "/" + id)
        .subscribe(
          (data: any) => {
            this.mensagem = data.mensagem;
            this.consultarFuncionarios();
          }
        );
    }
  }

  exibirFuncionario(id){
    
    this.httpClient.get(this.endpointFuncionario + "/" + id)
      .subscribe(
        (data: any) => {
          this.funcionarioEdicao = data;
          this.mensagemEdicao = "";
        }
      );

  }

  atualizarFuncionario(formEdicao){
    
    this.mensagemEdicao = "Processando, por favor aguarde...";

    this.httpClient.put(this.endpointFuncionario, formEdicao.value)
    .subscribe(
      (data: any) =>{
        this.mensagemEdicao = data.mensagem;
        this.consultarFuncionarios();
      }
    );

  }
}
