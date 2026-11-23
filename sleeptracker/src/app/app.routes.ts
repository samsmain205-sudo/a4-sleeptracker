import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'mood',
    loadComponent: () =>
      import('./log-mood/log-mood.component')
        .then((m) => m.LogMoodComponent),
  },{
  path: 'data',
  loadComponent: () =>
    import('./view-data/view-data.component')
      .then((m) => m.ViewDataComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];