import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormGroupDirective } from './cmail-form-group/cmail-form-field.directive';


@NgModule({
  declarations: [
    CmailFormGroupComponent,
    CmailFormGroupDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmailFormGroupComponent,
    CmailFormGroupDirective
  ]
})
export class CmailFormModuleModule { }
