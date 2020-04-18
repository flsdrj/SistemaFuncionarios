import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cadastro-setor',
  templateUrl: './cadastro-setor.component.html',
  styleUrls: ['./cadastro-setor.component.css']
})
export class CadastroSetorComponent implements OnInit {

  //atributos..
  mensagem:string;
  access_token="";
  endpointSetor="http://localhost:53634/api/setor";


  //declarando HttpClient e fazendo injeção de dependência
  constructor(private httpClient:HttpClient,
    private cookieService:CookieService) { }

  ngOnInit(): void {
    this.access_token = this.cookieService.get('access_token');
  }

  cadastrarSetor(formCadastro){
    this.mensagem = "Processando, por favor aguarde.";

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.access_token)

    //realizando a chamada para a API..
    this.httpClient.post(this.endpointSetor, formCadastro.value, {headers})
      .subscribe(
        (data:any) => {
          this.mensagem = data.mensagem;
          formCadastro.reset();
        }
      )

  }

}