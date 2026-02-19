import {Component} from '@angular/core';

@Component({
  selector: 'app-task4',
  template: ` 
      @if (isServerRunning) {
        <p>Yes, the server is running</p> 
      } @else {
        <p>No, the server is not running</p>
      }
  `,
})
export class App {
  isServerRunning = true;
}
