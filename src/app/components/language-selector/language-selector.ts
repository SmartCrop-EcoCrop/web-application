// src/app/components/language-selector/language-selector.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.css']
})
export class LanguageSelectorComponent {

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;

    // Obtiene la URL actual del navegador
    const currentPath = window.location.pathname;

    // Define el nuevo prefijo de ruta (ej: /en-US)
    const newPrefix = lang === 'es-CO' ? '' : `/${lang}`;

    // Si la URL actual ya tiene un prefijo de idioma (ej: /en-US/app/dashboard),
    // lo elimina y añade el nuevo. Si no tiene prefijo, lo añade.

    let path = currentPath;

    // Esta es una simplificación: asume que solo hay un prefijo de idioma o ninguno.
    if (path.startsWith('/en-US')) {
      path = path.replace('/en-US', '');
    }

    // La nueva URL completa
    const newUrl = `${newPrefix}${path}`;

    // Recarga la página con la nueva URL para que Angular cargue la versión traducida
    window.location.href = newUrl;
  }
}
