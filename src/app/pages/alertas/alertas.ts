import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './alertas.html',
  styleUrls: ['./alertas.css']
})
export class AlertasComponent {}
