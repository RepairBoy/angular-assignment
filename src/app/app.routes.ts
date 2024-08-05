import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [

    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'login', loadComponent:()=>import('./pages/login/login.component').then((m)=> m.LoginComponent) },
    // {
    //     path:'',
    //     loadComponent:()=>import('./layout/user-layout/user-layout.component').then((m)=> m.UserLayoutComponent) ,canActivate:[authGuard],
    //     children: [
    //     {path:"home",loadComponent:()=>import('./pages/home/home.component').then((m)=> m.HomeComponent),canActivate:[authGuard]},
        
    //     ],
    // },
    
];
