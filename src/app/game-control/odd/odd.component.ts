import {Component, OnInit, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() currentNumber: any;
  currentlyDisplayedNumber = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOdd(changes['currentNumber'].currentValue)
  }

  isOdd(number: number) {
    if(number % 2 !== 0) {
      this.currentlyDisplayedNumber = number;
    }
  }

}
