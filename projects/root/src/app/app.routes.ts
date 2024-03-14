import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'header',
    loadChildren: () => import('layout/Module').then((m) => m.LayoutModule),
  },
];
