import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-acesso-usuarios',
  templateUrl: './acesso-usuarios.component.html',
  styleUrls: ['./acesso-usuarios.component.css']
})
export class AcessoUsuariosComponent implements OnInit {

  //atributos
  endpointAcesso = "http://localhost:53634/api/Login";
  endpointCadastro = "http://localhost:53634/api/Usuario";

  mensagemAcesso:string;
  mensagemCadastro:string;

  //injeção de dependência para a classe HttpClient
  constructor(private httpClient:HttpClient, 
              private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  //função executada pelo formulário
  autenticarUsuario(formAcesso){
    this.mensagemAcesso = "Processando, por favor aguarde...";

    //acessando a API..
    this.httpClient.post(this.endpointAcesso, formAcesso.value)
      .subscribe(
        (data:any) =>{           
          this.mensagemAcesso = data.mensagem;          
          formAcesso.reset();

          //gravando o token em um arquivo de cookie
          this.cookieService.set('access_token', data.token);
          location.reload();

        },
        e => {
          this.mensagemAcesso = "Acesso não autorizado.";
          console.log(e.error);
        }
      )
  }

  //função para realizar o cadastro do usuário
  cadastrarUsuario(formCadastro){
    this.mensagemCadastro = "Processando, por favor aguarde...";

    //acessando a API..
    this.httpClient.post(this.endpointCadastro, formCadastro.value)
      .subscribe(
        (data:any)=>{
          this.mensagemCadastro = data.mensagem;
          formCadastro.reset(); //limpando o formulário
        },
        e =>{
          this.mensagemCadastro = JSON.stringify(e.error);
        }
      )

  }

}
