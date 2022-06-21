import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
})
export class RatesComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
