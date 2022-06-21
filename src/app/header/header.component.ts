import { Component, Input, OnInit } from '@angular/core';
import { Currency } from '../shared/models/Currency.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currencys: Currency[] = [];

  ngOnInit(): void {}
}
