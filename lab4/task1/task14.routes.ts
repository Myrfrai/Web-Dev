import {Routes} from '@angular/router';

import {Home} from './task14home';
import {User} from './task14user';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];
