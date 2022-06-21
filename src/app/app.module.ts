import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { RatesComponent } from './rates/rates.component';
// import { RatesComponent } from './rates/rates.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CurrencyFormComponent, RatesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
