import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

// Ajusta las rutas para que apunten a los archivos .ts reales
// NOTA: Si usas la ruta '../../components/header/header' sin .ts, funciona mejor
// porque TypeScript la infiere, pero con tus nombres de archivo es:
import { HeaderComponent } from '../../components/header/header';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { FooterComponent } from '../../components/footer/footer'; // <-- ¡IMPORTA ESTO!

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    // Los nombres de clase siguen siendo los mismos (HeaderComponent, SidebarComponent)
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TranslateDirective,
    TranslatePlaceholderDirective
  ],
  templateUrl: './main-layout.html', // Asumo que el template también está sin .component
  styleUrls: ['./main-layout.css']
})
export class MainLayoutComponent {
  // ...
}
