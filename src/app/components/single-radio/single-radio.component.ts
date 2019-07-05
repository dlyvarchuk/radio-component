import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Radio} from '../../models/Radio';

@Component({
  selector: 'app-single-radio',
  templateUrl: './single-radio.component.html',
  styleUrls: ['./single-radio.component.less']
})
export class SingleRadioComponent implements OnInit {
  @Input() radioInput: Radio = new Radio();
  @Input() radioInputName: string;
  @Output() radioEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  sendRadioName(radioName = '') {
    this.radioEvent.emit(radioName);
  }
}
