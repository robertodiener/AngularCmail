import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  api = 'http://localhost:3200/login';

  constructor(private httpClient: HttpClient) { }

  logar (dadosLogin){
   return  this.httpClient
    .post(this.api, dadosLogin)
    .pipe(
      tap( (response: any) => {
        localStorage.setItem('TOKEN', response.token);
        //return response;
      })
    )
  }
}
