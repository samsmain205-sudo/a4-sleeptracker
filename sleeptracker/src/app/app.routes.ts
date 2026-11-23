import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./bottom-navbar/bottom-navbar.component')
        .then((m) => m.BottomNavbarComponent),
    children: [
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
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];