import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePlaceholderDirective } from './directives/translate.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SmartCrop-App5');
}
