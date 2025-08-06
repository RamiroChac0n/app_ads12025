import { Routes } from '@angular/router';
import { title } from 'node:process';

export const routes: Routes = [
{    
    path:'home',
    title:'App | Home',
    loadComponent: () => import('./home/pages/home/home.component'),
}
];
