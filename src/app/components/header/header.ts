// src/app/components/header/header.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../language-selector/language-selector';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LanguageSelectorComponent, TranslatePipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  navOpen = false;

  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  closeNav(): void {
    this.navOpen = false;
  }

  emitSidebarToggle(): void {
    this.sidebarToggle.emit();
  }
}
