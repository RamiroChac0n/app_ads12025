import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path:'shiba',
    title:'App | Home',
    loadComponent: () => import('./home/pages/home/home.component'),
},
{
    path:'users',
    title:'App | Users',
    loadComponent: () => import('./user/pages/user/user.component'),
},
{
    path:'usersQuery/:id/name/:type',
    title:'App | Users',
    loadComponent: () => import('./user/pages/user/user.component'),
},
{
    path:'phones',
    title:'App | Phones',
    loadComponent: () => import('./phone/pages/phones/phones.component'),
},
{
    path:'*',
    redirectTo:'shiba',
}
];