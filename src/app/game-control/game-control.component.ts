import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incNumber = 0;
  intervalId: any;

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalId = setInterval(this.handleInterval, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
    this.incNumber = 0;
  }

  handleInterval = () => {
    this.incNumber = this.incNumber + 1;
    console.log(this.incNumber);
  }

}
