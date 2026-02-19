import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-task3',
  template: `<section>
            <app-user />
            </section>`,
  imports: [User],
})
export class App {}