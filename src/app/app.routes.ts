import { Routes } from '@angular/router';

// Componentes del Layout
import { MainLayoutComponent } from './layout/main-layout/main-layout';

// Componentes de ACCESO (Públicos)
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

// Componentes de PÁGINAS (Protegidas)
import { DashboardComponent } from './pages/dashboard/dashboard';
import { TemporalRegistroComponent } from './pages/temporal-registro/temporal-registro';
import { RealTimeComponent } from './pages/real-time/real-time';
import { AlertasComponent } from './pages/alertas/alertas';
import { GuiasComponent } from './pages/guias/guias';
// Importa el resto de tus componentes si los necesitas (Plagas, RedAgricultores, Profile)
import { ProfileComponent } from './pages/profile/profile';
import { PlagasComponent } from './pages/plagas/plagas';
import { RedAgricultoresComponent } from './pages/red-agricultores/red-agricultores';
import { ForoComponent } from './pages/foro/foro';
import { ClimaComponent } from './pages/clima/clima';
import { NoticiasComponent } from './pages/noticias/noticias';

export const routes: Routes = [

  // 1. REDIRECCIÓN INICIAL
  // Si el usuario entra a la raíz (/), lo envía directamente al login.
  { path: '', redirectTo: 'acceso/login', pathMatch: 'full' },

  // 2. RUTAS DE ACCESO (Públicas: Login y Register)
  {
    path: 'acceso', // Prefijo: /acceso
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      // Redirige la ruta /acceso a /acceso/login
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // 3. RUTAS PROTEGIDAS (Zona de la Aplicación con Sidebar/Header)
  {
    // La ruta base de tu aplicación principal es /app
    path: 'app',
    component: MainLayoutComponent,
    // Aquí iría el CanActivate: [AuthGuard] para proteger estas rutas
    // canActivate: [AuthGuard],
    children: [
      // Rutas principales del Sidebar
      { path: 'dashboard', component: DashboardComponent }, // /app/dashboard
      { path: 'temporal-registro', component: TemporalRegistroComponent }, // /app/registro-temporal
      { path: 'real-time', component: RealTimeComponent }, // /app/real-time
      { path: 'plagas', component: PlagasComponent }, // /app/plagas (Identificación de Plagas)
      { path: 'alertas', component: AlertasComponent }, // /app/alertas
      { path: 'red-agricultores', component: RedAgricultoresComponent }, // /app/red-agricultores
      { path: 'guias', component: GuiasComponent }, // /app/guias
      { path: 'profile', component: ProfileComponent }, // /app/profile
      { path: 'foro', component: ForoComponent },        // /app/foro
      { path: 'clima', component: ClimaComponent },      // /app/clima
      { path: 'noticias', component: NoticiasComponent }, // /app/noticias
      // Otras secciones (asumiendo que las mantienes)


      // Redirección interna: Si entran a /app, los manda a /app/dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  // 4. RUTAS DE FALLO (Catch-all)
  // Cualquier otra ruta no definida (404) te envía de vuelta al login.
  { path: '**', redirectTo: 'acceso/login' }
];
