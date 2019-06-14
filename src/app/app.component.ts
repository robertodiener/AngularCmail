import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinarario: '',
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
      this.emailList.push(this.email);
      this.email = {
        destinarario: '',
        assunto: '',
        conteudo: ''
      };
      console.log(this.email);
      formEmail.reset();
    }
   
  }
}

