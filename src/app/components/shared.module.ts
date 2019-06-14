import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-form-group.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CmailListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent, CmailListItemComponent
  ]
})
export class SharedModule { }
