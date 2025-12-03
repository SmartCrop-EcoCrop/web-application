import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-noticias',
  imports: [TranslatePipe],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class NoticiasComponent {

}
