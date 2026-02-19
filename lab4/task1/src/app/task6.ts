import {Component} from '@angular/core';

@Component({
  selector: 'app-task6',
  styleUrls: ['task6.css'],
  template: ` <div [contentEditable]="isEditable">   </div> `,
})  
export class App {
    isEditable = true;
}
