import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-guias',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './guias.html',
  styleUrls: ['./guias.css']
})
export class GuiasComponent {

  // Función para establecer el valor del input al hacer clic en una pestaña
  setSearchFilter(inputElement: HTMLInputElement, event: Event) {

    // El innerText contendrá el texto ya traducido por el pipe | translate.
    const buttonText = (event.target as HTMLElement).innerText.trim();

    // Asigna el texto traducido al valor del campo de búsqueda.
    inputElement.value = buttonText;
  }
}
