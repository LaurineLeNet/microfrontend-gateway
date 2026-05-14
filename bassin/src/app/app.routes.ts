import {Routes} from '@angular/router';
import {Bassin} from './bassin/bassin';
import {Inventaire} from './inventaire/inventaire';

export const routes: Routes = [
  {
    path: '',
    component: Bassin,
  },
  {
    path: 'inventaire',
    component: Inventaire
  }
];
