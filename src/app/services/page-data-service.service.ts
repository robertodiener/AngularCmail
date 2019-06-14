import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataServiceService {
  
  titulo = new Subject<string>();


  defineTitulo(novoTitulo: string) {
    document.querySelector('title').textContent = novoTitulo;
    this.titulo.next(novoTitulo);
  }

  constructor() { }
}