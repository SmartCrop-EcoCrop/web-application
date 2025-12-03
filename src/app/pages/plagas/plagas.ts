import { Component } from '@angular/core';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-plagas',
  imports: [TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './plagas.html',
  styleUrl: './plagas.css'
})
export class PlagasComponent  {

}
