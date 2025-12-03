// src/app/pages/foro/foro.ts

import { Component } from '@angular/core';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [TranslateDirective, TranslatePlaceholderDirective],

  templateUrl: './foro.html',
  styleUrls: ['./foro.css']
})
export class ForoComponent {}
