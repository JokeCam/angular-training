import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() currentNumber: any;
  currentlyDisplayedNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isOdd(changes['currentNumber'].currentValue)
  }

  isOdd(number: number) {
    if(number % 2 === 0) {
      this.currentlyDisplayedNumber = number;
    }
  }
}
