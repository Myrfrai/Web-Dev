import {Component} from '@angular/core';

@Component({
  selector: 'app-task2',
  template: ` 🤔Hello👌 {{ city }}, {{ 1 + 1 }}`,
})
export class Child {
    city = "San Francisco";
}
