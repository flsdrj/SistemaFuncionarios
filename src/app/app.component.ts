import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  isAuthenticated = false;

  //injeção de dependencia
  constructor(private cookieService:CookieService,
              private router: Router){}

  ngOnInit(){
    this.isAuthenticated = this.cookieService.
      get('access_token') != "";
  }

  logout(){
    if(confirm('Deseja realmente sair da conta?')){
      this.cookieService.delete('access_token');
      this.isAuthenticated = false;

      this.router.navigate(['/acesso-usuario']);
    }
  }
}
