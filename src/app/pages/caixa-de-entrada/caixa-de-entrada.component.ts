import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataServiceService } from 'src/app/services/page-data-service.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailService,
    private pageService: PageDataServiceService) {
     
     }

  ngOnInit() {
    this.pageService.defineTitulo('CMail - Caixa de entrada');
    this.emailService.listar().subscribe(lista => this.emailList = lista)
  }

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  };
  
  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEMail(formEmail: NgForm){
    
    console.log(formEmail);

    if(formEmail.valid){
        this.emailService.enviar(this.email).subscribe(
          emailApi => {
            this.emailList.push(emailApi);
          this.email = { destinatario: '', assunto: '', conteudo: '' };
        },
        erro => console.error(erro)
        );
        formEmail.reset();
      }
    }

  handleRemoveEmail(eventoVaiRemover, emailId){
    if(eventoVaiRemover.status === 'removing'){
      this.emailService.deletar(emailId)
      .subscribe(() => {
        console.log("oioioioioioi");
        this.emailList = this.emailList.filter(email => email.id != emailId)
      },
      (erro) => console.error(erro));
    }
  }
}