import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
{
    path:'auth',
    title:'App | Auth',
    loadComponent: () => import('./auth/pages/auth/auth.component'),
},
{
    path:'',
    title: 'App | Home',
    loadComponent: () => import('./main/pages/navigation/navigation.component'),
    canActivate: [authGuard],
    children: [

        {
            path:'shiba',
            title:'App | Home',
            loadComponent: () => import('./home/pages/home/home.component'),
            canActivate: [authGuard],
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

    ]
},

// Ruta Comodín - Cualquier otra ruta redirige a /auth
{
    path:'**',
    pathMatch:'full',
    redirectTo:'/auth',
}
];