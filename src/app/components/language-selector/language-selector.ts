import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, type Language } from '../../services/i18n.service';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css'
})
export class LanguageSelectorComponent {
  private i18nService = inject(I18nService);
  
  currentLanguage$ = this.i18nService.currentLanguage;
  languages: Language[] = ['en-US', 'es-ES'];

  changeLanguage(language: Language): void {
    if (language !== this.currentLanguage$()) {
      this.i18nService.setLanguage(language);
    }
  }

  getLanguageLabel(language: Language): string {
    return language === 'en-US' ? 'English' : 'Español';
  }
}
