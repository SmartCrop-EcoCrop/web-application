// src/app/components/header/header.ts

import { Component } from '@angular/core';
// Importa las herramientas de routing
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../language-selector/language-selector'; // ¡IMPORTA ESTO!
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  // ¡CRUCIAL! Asegúrate de incluir RouterModule aquí para que routerLink funcione.
  imports: [RouterModule, LanguageSelectorComponent, TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}
