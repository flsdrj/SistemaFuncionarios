import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-funcao',
  templateUrl: './cadastro-funcao.component.html',
  styleUrls: ['./cadastro-funcao.component.css']
})
export class CadastroFuncaoComponent implements OnInit {

  //atributos..
  mensagem:string;


//declarando HttpClient e fazendo injeção de dependência
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  cadastrarFuncao(formCadastro){
    this.mensagem = "Processando, por favor aguarde.";

    //realizando a chamada para a API..
    this.httpClient.post("http://localhost:53634/api/funcao", formCadastro.value)
      .subscribe(
        (data:any) => {
          this.mensagem = data.mensagem;
          formCadastro.reset();
        }
      )

  }



}
