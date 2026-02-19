import {Component} from '@angular/core';
import {User} from './task9user';

@Component({
  selector: 'app-task9',
  template: `<app-user name="Simran"></app-user>`,
  imports: [User],
})
export class App {}
