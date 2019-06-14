import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';

import {map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this)),
    telefone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{4}-?[0-9]{4}[0-9]")]),
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleCadastrarUsuario() {
    if(this.formCadastro.valid){
      const userData = ""; //new User(this.formCadastro.value);
      this.httpClient.post('http://localhost:3200',userData)
      .subscribe(
        () => {
          console.log(`Cadastrado com sucesso.`);
          this.formCadastro.reset();
        }
        , erro => console.error(erro)
      )
    }else {
      this.validarTodosOsCAmposDoFormulario();
    }
  }

  validarTodosOsCAmposDoFormulario() {
    const form = this.formCadastro;
    form.markAllAsTouched();
  }

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient.head(campoDoFormulario.value, {
      observe: 'response'
    })
    .pipe(
      map((response: HttpResponseBase) => {
        return response.ok? null : { urlInvalida:true}
      }),
      catchError((error) => {
        return [{urlInvalida:true}]
      })
    )
  }
}
