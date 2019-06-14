import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './pages/caixa-de-entrada/caixa-de-entrada.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared.module';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
