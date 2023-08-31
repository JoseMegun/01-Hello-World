import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 0;
  activeDecrease = false;
  activeIncrease = true;

  increase() {
    // this.counter = this.counter + 1;
    this.counter++;
    if (this.counter > 0) {
      this.activeDecrease = true;
    }
    if (this.counter === 0) {
      this.activeIncrease = true;
    }
  }

  decrease() {
    // this.counter = this.counter - 1;
    if (this.counter > 0) {
      this.counter--;
    }
    if (this.counter === 0) {
      this.activeDecrease = false;
    }
    if (this.counter < 0) {
      this.activeIncrease = false;
    }
  }
}