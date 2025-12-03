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
export class GuiasComponent {}
