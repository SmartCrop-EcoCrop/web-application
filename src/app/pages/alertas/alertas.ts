import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [CommonModule, TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './alertas.html',
  styleUrls: ['./alertas.css']
})
export class AlertasComponent {}
