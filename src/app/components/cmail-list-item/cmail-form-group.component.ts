import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';

  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

  constructor(private elemento: ElementRef) { }

  ngOnInit() {  }

  removeEmail(click: Event){
    console.log('clicou no botao remover!');
    if(confirm('Tem certeza?')){
      this.vaiRemover.emit({status: 'removing'})
    }
  }

}
