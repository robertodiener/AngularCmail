import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './pages/caixa-de-entrada/caixa-de-entrada.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared.module';
import { EmailService } from './services/email.service';

registerLocaleData(localePt, 'pt');

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
  providers: [EmailService,
  {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
