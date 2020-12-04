import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bookingOptions: string[] = ['one-way flight', 'return flight'];

  selectedOption: string = this.bookingOptions[0];
  oneWayDate = new Date().toLocaleString();
  returnDate = new Date().toLocaleString();
  disableReturn: boolean = true;

  reviewBooking() {
    let message: string =
      this.selectedOption === 'one-way flight'
        ? `You have booked a ${this.selectedOption} for ${this.oneWayDate}`
        : `You have booked a ${this.selectedOption} for ${this.oneWayDate} to ${this.returnDate}`;
    alert(message);
  }

  onChange(value) {
    value === 'one-way flight'
      ? (this.disableReturn = true)
      : (this.disableReturn = false);
  }
}
