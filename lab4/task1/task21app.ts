import {Component, inject} from '@angular/core';
import {CarService} from './task21service';

@Component({
  selector: 'app-root',
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class App {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐️ ');
}
