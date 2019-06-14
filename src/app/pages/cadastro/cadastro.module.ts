import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormGroupDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CadastroRouteModules } from './cadastro-rotas.module';
import { CadastroComponent } from './cadastro.component';
import { CmailFormModuleModule } from 'src/app/components/cmail-form-module.module';


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CmailFormModuleModule,
    CadastroRouteModules
  ],
  exports:[CadastroComponent]
})

export class CadastroModule { }
