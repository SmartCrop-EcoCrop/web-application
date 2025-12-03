import { Directive, ElementRef, Input, OnInit, inject, DestroyRef } from '@angular/core';
import { I18nService } from '../services/i18n.service';
import { effect } from '@angular/core';

@Directive({
  selector: '[i18n]',
  standalone: true
})
export class TranslateDirective implements OnInit {
  private translationKey = '';
  private fallbackText = '';

  @Input('i18n')
  set i18nKey(value: string) {
    this.translationKey = this.normalizeKey(value);
  }
  
  private el = inject(ElementRef);
  private i18nService = inject(I18nService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.fallbackText = (this.el.nativeElement.textContent ?? '').trim();
    if (!this.translationKey) return;

    // Crear un effect que reaccione a cambios de idioma
    const effectRef = effect(() => {
      this.i18nService.currentLanguage();
      const translation = this.i18nService.translate(this.translationKey);
      const resolvedText = translation !== this.translationKey && translation.trim().length > 0
        ? translation
        : (this.fallbackText || this.translationKey);
      this.el.nativeElement.textContent = resolvedText;
    });

    // Registrar limpieza en DestroyRef
    this.destroyRef.onDestroy(() => effectRef.destroy());
  }

  private normalizeKey(value: string): string {
    if (!value) return '';
    return value.startsWith('@@') ? value.substring(2) : value;
  }
}

@Directive({
  selector: '[i18n-placeholder]',
  standalone: true
})
export class TranslatePlaceholderDirective implements OnInit {
  private translationKey = '';
  private fallbackText = '';

  @Input('i18n-placeholder')
  set i18nKey(value: string) {
    this.translationKey = this.normalizeKey(value);
  }
  
  private el = inject(ElementRef);
  private i18nService = inject(I18nService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.fallbackText = this.el.nativeElement.placeholder ?? '';
    if (!this.translationKey) return;

    // Crear un effect que reaccione a cambios de idioma
    const effectRef = effect(() => {
      this.i18nService.currentLanguage();
      const translation = this.i18nService.translate(this.translationKey);
      const resolvedText = translation !== this.translationKey && translation.trim().length > 0
        ? translation
        : (this.fallbackText || this.translationKey);
      this.el.nativeElement.placeholder = resolvedText;
    });

    // Registrar limpieza en DestroyRef
    this.destroyRef.onDestroy(() => effectRef.destroy());
  }

  private normalizeKey(value: string): string {
    if (!value) return '';
    return value.startsWith('@@') ? value.substring(2) : value;
  }
}
