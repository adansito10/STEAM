import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AdminUsersComponent } from './users/admin-users.component';
import { AdminUniversitiesComponent } from './universities/admin-universities.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'usuarios', component: AdminUsersComponent },
      { path: 'universidades', component: AdminUniversitiesComponent },
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
    ]
  }
];
