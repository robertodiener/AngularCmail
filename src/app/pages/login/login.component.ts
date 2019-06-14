import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };
  mensagemErro: any;

  constructor(private httpClient: HttpClient,
    private loginService: LoginService,
    private roteador: Router,
    emailService: EmailService) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService.logar(this.login)
        .subscribe(
          () => 
            this.roteador.navigate(['/inbox']),
          (responseError: HttpErrorResponse) => {
            if(responseError.status == 400)
            this.mensagemErro = "Usuário ou senha inválida";
            console.dir(responseError)
          }
        )
    }
  }
}

