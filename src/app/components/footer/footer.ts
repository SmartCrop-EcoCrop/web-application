import { Component } from '@angular/core';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  // Aquí puedes definir datos para los enlaces si es necesario
}
