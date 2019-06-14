import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {  FormsModule } from '@angular/forms';
import { LoginRouteModule } from './login-route.module';
import { CmailFormModuleModule } from 'src/app/components/cmail-form-module.module';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRouteModule,
    CmailFormModuleModule
  ],
  exports:[LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
