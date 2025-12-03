import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-clima',
  imports: [TranslatePipe],
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})
export class ClimaComponent {

}
