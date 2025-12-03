import { Component } from '@angular/core';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-clima',
  imports: [TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})
export class ClimaComponent {

}
