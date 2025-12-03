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
export class ForoComponent {}
