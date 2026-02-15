import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursosComponent } from './pages/cursos/cursos.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cuestionario', loadComponent: () => import('./pages/cuestionario/cuestionario.component').then(m => m.CuestionarioComponent) },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  { path: '**', component: Error404Component }
];
