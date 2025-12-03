import { Component } from '@angular/core';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-noticias',
  imports: [TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class NoticiasComponent {

}
