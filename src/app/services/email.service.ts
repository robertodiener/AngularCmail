import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = environment.base_url + '/emails';

  constructor(private httpClient: HttpClient) { }

  cabecalho = new HttpHeaders({
    'Authorization': localStorage.getItem('TOKEN')
  })


  enviar({ destinatario, assunto, conteudo }) {

    const emailApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo,
    }

    return this.httpClient
      .post(this.api, emailApi, { headers: this.cabecalho })
      .pipe<Email>(
        map(
          (emailApi: any) => {
            return new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.created_at,
              id : emailApi.id
            })
          }
        )
      )
  }

  listar(){
    return this.httpClient.get(this.api, {headers: this.cabecalho})
    .pipe<Email[]>(
      map(
        (response: any[]) => {
          return response
            .map(
              emailApi => new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.created_at,
                id: emailApi.id
              })
            )
        
        }
      )
    )
  }

  deletar(id){
    return this.httpClient.delete(`${this.api}/${id}`, {headers: this.cabecalho})
  }
}
