import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard';
import { EquipoTarjetasComponent } from './features/equipo-tarjetas/equipo-tarjetas';
import { FinancierosBancariaComponent } from './features/financieros-bancaria/financieros-bancaria';
import { FinancierosTarjetasComponent } from './features/financieros-tarjetas/financieros-tarjetas';
import { AnalisisComponent } from './features/analisis/analisis';
import { EventosComponent } from './features/eventos/eventos';
import { DocumentosComponent } from './features/documentos/documentos';
import { TarjetasComponent } from './features/tarjetas/tarjetas';
import { ConfiguracionComponent } from './features/configuracion/configuracion';
import { AuthService } from './core/services/auth.service';
import { inject } from '@angular/core';

const authGuard = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated();
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'equipo-tarjetas',
    component: EquipoTarjetasComponent,
    canActivate: [authGuard]
  },
  {
    path: 'financieros',
    component: FinancierosBancariaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'financieros-tarjetas',
    component: FinancierosTarjetasComponent,
    canActivate: [authGuard]
  },
  {
    path: 'analisis',
    component: AnalisisComponent,
    canActivate: [authGuard]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'documentos',
    component: DocumentosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'tarjetas',
    component: TarjetasComponent,
    canActivate: [authGuard]
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
