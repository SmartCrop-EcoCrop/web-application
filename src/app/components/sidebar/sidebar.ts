import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- ¡IMPORTA ESTO!
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true, // <-- Asumo que es Standalone
  imports: [
    RouterModule,
    TranslateDirective,
    TranslatePlaceholderDirective
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  // ...
}
