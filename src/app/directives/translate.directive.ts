import { Directive, ElementRef, Input, OnInit, inject, DestroyRef } from '@angular/core';
import { I18nService } from '../services/i18n.service';
import { effect } from '@angular/core';

@Directive({
  selector: '[i18n]',
  standalone: true
})
export class TranslateDirective implements OnInit {
  @Input('i18n') i18nKey: string = '';
  
  private el = inject(ElementRef);
  private i18nService = inject(I18nService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    if (!this.i18nKey) return;

    // Crear un effect que reaccione a cambios de idioma
    const effectRef = effect(() => {
      const lang = this.i18nService.currentLanguage();
      const translation = this.i18nService.translate(this.i18nKey);
      this.el.nativeElement.textContent = translation;
    });

    // Registrar limpieza en DestroyRef
    this.destroyRef.onDestroy(() => effectRef.destroy());
  }
}

@Directive({
  selector: '[i18n-placeholder]',
  standalone: true
})
export class TranslatePlaceholderDirective implements OnInit {
  @Input('i18n-placeholder') i18nKey: string = '';
  
  private el = inject(ElementRef);
  private i18nService = inject(I18nService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    if (!this.i18nKey) return;

    // Crear un effect que reaccione a cambios de idioma
    const effectRef = effect(() => {
      const lang = this.i18nService.currentLanguage();
      const translation = this.i18nService.translate(this.i18nKey);
      this.el.nativeElement.placeholder = translation;
    });

    // Registrar limpieza en DestroyRef
    this.destroyRef.onDestroy(() => effectRef.destroy());
  }
}
