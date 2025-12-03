import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-guias',
  standalone: true,

  imports: [CommonModule, TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './guias.html',
  styleUrls: ['./guias.css']
})
export class GuiasComponent {}
