import {Component, OnInit} from '@angular/core';
import {Radio} from '../../models/Radio';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-all-radios',
  templateUrl: './all-radios.component.html',
  styleUrls: ['./all-radios.component.less']
})
export class AllRadiosComponent implements OnInit {

  radios: Radio[] = [];
  radioName: string;
  selectedRadioName: string;

  constructor(
    private radioService: RadioService
  ) { }

  ngOnInit() {
    this.getRadios();
  }

  private getRadios() {
    this.radioService.getAll().subscribe((res) => {
      this.radios = res ? res : [];
    });
  }

  receiveRadioName($event) {
    this.radioName = $event;
  }

  setSelectedRadio() {
    this.selectedRadioName = this.radioName;
  }
}
