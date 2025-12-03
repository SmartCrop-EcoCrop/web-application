import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [TranslatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  private i18n = inject(I18nService);
  currentLanguage$ = this.i18n.currentLanguage;
}
