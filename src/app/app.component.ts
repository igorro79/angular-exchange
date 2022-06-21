import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

import { Currency } from './shared/models/Currency.model';

//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-exchange';
  currencyToProcess = ['USD', 'EUR'];
  currencys: any = [];

  selectedOptionOne = 'UAH';
  selectedOptionTwo = 'UAH';
  valueOne = 0;
  valueTwo = 0;
  wrapped = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCurrency();
  }

  updateOnSelect(
    currencys: any,
    selectedOptionOne: string,
    selectedOptionTwo: string,
    valueOne: number,
    valueTwo: number,
    wrapped: boolean
  ) {
    let rate1 = currencys.find((item: any) => item.cc === selectedOptionOne);
    let rate2 = currencys.find((item: any) => item.cc === selectedOptionTwo);
    const convert =
      (valueOne * (rate1 ? rate1.rate : 1)) / (rate2 ? rate2.rate : 1);
    this.valueTwo = convert;
  }

  updateOnInput(
    currencys: any,
    selectedOptionOne: string,
    selectedOptionTwo: string,
    valueOne: number,
    valueTwo: number,
    wrapped: boolean
  ) {
    let rate1 = currencys.find((item: any) => item.cc === selectedOptionOne);
    let rate2 = currencys.find((item: any) => item.cc === selectedOptionTwo);
    const convert = wrapped
      ? (valueTwo * (rate2 ? rate2.rate : 1)) / (rate1 ? rate1.rate : 1)
      : (valueOne * (rate1 ? rate1.rate : 1)) / (rate2 ? rate2.rate : 1);

    console.log(convert);
    wrapped ? (this.valueOne = convert) : (this.valueTwo = convert);
  }

  handleI(eventData: any) {
    if (eventData.name === 'one') {
      this.valueOne = eventData.value;
      this.wrapped = false;
    } else {
      this.valueTwo = eventData.value;
      this.wrapped = true;
    }
    this.updateOnInput(
      this.currencys,
      this.selectedOptionOne,
      this.selectedOptionTwo,
      this.valueOne,
      this.valueTwo,
      this.wrapped
    );
  }

  handleS(eventData: any) {
    if (eventData.name === 'one') {
      this.selectedOptionOne = eventData.value;
      this.wrapped = false;
    } else {
      this.selectedOptionTwo = eventData.value;
      this.wrapped = true;
    }
    this.updateOnSelect(
      this.currencys,
      this.selectedOptionOne,
      this.selectedOptionTwo,
      this.valueOne,
      this.valueTwo,
      this.wrapped
    );
  }

  getCurrency() {
    this.httpClient
      .get<Currency[]>(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      )
      .subscribe((resp) => {
        let filtered = resp.filter((item: { cc: any }) =>
          this.currencyToProcess.some((i) => item.cc === i)
        );
        this.currencys = filtered;
      });
  }
}
