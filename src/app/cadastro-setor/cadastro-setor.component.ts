import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-setor',
  templateUrl: './cadastro-setor.component.html',
  styleUrls: ['./cadastro-setor.component.css']
})
export class CadastroSetorComponent implements OnInit {

  //atributos..
  mensagem:string;


  //declarando HttpClient e fazendo injeção de dependência
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarSetor(formCadastro){
    this.mensagem = "Processando, por favor aguarde.";

    //realizando a chamada para a API..
    this.httpClient.post("http://localhost:53634/api/setor", formCadastro.value)
      .subscribe(
        (data:any) => {
          this.mensagem = data.mensagem;
          formCadastro.reset();
        }
      )

  }

}