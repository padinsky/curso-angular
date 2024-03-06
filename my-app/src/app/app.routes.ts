import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'page1/:id', loadComponent: () => import('./pages/page1/page1.component').then((x) => x.Page1Component) }, // Esto es para hacer lazy loading 
    { path: 'page2', loadComponent: () => import('./pages/page2/page2.component').then((x) => x.Page2Component) }, // y evitar que se traigan todas 
    { path: 'page3', loadComponent: () => import('./pages/page3/page3.component').then((x) => x.Page3Component) }, // las páginas desde el comienzo
];
