import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- ¡IMPORTA ESTO!

@Component({
  selector: 'app-sidebar',
  standalone: true, // <-- Asumo que es Standalone
  imports: [
    RouterModule // <-- ¡AGRÉGALO AQUÍ! Esto activa routerLink y routerLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  // ...
}
