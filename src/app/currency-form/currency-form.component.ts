import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
})
export class CurrencyFormComponent implements OnInit {
  @Input() value: number = 0;
  @Output() newSelect: EventEmitter<object> = new EventEmitter<object>();
  @Output() newInput: EventEmitter<object> = new EventEmitter<object>();
  constructor() {}

  // buyEvent = new EventEmitter<string>();

  handleSelect(event: any) {
    this.newSelect.emit({
      name: event.target.parentNode.dataset.name,
      value: event.target.value,
    });
  }

  handleInput(event: any) {
    this.newInput.emit({
      name: event.target.parentNode.dataset.name,
      value: event.target.value,
    });
  }

  ngOnInit(): void {}
}
