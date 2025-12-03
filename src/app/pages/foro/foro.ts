// src/app/pages/foro/foro.ts

import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [TranslatePipe],

  templateUrl: './foro.html',
  styleUrls: ['./foro.css']
})
export class ForoComponent {

  // Nueva función para establecer el valor del input al hacer clic en una pestaña
  setSearchFilter(inputElement: HTMLInputElement, event: Event) {

    // Obtiene el texto traducido de la pestaña clickeada
    const buttonText = (event.target as HTMLElement).innerText.trim();

    // Asigna el texto al valor del campo de búsqueda
    inputElement.value = buttonText;
  }
}
