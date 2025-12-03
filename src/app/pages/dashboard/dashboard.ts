import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-dashboard',
  imports: [TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  private i18n = inject(I18nService);
  currentLanguage$ = this.i18n.currentLanguage;
}
