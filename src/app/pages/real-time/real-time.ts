import { Component } from '@angular/core';
// Si utilizas directivas de Angular como ngFor o ngIf, imports: [CommonModule]
// Si estás usando botones funcionales, considera el RouterModule si tienen routerLink
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-real-time',
  standalone: true,
  // Usamos CommonModule para directivas estructurales básicas
  imports: [CommonModule],
  templateUrl: './real-time.html',
  styleUrls: ['./real-time.css']
})
export class RealTimeComponent {}
