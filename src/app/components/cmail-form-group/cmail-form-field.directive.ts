import { Directive, ElementRef } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Directive({
    selector: '[cmailFormField]'
})
export class CmailFormGroupDirective {
    constructor(private campo: ElementRef) { }
    ngOnInit() {
        const campo = this.campo.nativeElement;
        if(campo.name){
            campo.id = campo.name;
            campo.setAttribute('placeholder',' ');
            campo.classList.add('mdl-textfield__input');
        }else{
            throw new Error("Atributo 'anme' é obrigatório");
        }
        
    }
}
