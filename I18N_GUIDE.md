# Guía de Internacionalización (i18n)

## Visión General

Tu aplicación Angular ahora tiene soporte completo para **internacionalización** (i18n) con los idiomas:
- 🇺🇸 **English (en-US)** - Por defecto
- 🇪🇸 **Español (es-ES)**

## Estructura de Traducción

### Archivos Principales
```
src/locale/
├── messages.xlf          # Plantilla base (Inglés)
└── messages.es-ES.xlf    # Traducciones al Español
```

### Servicio de i18n
```
src/app/services/
└── i18n.service.ts       # Servicio central de traducciones
```

### Componente Selector de Idioma
```
src/app/components/language-selector/
├── language-selector.ts
├── language-selector.html
└── language-selector.css
```

## Cómo Funciona

### 1. Servicio de Traducciones (I18nService)

El servicio `I18nService` maneja todas las traducciones. Está disponible como singleton en toda la aplicación.

**Características:**
- Almacena traducciones en memoria
- Maneja estado del idioma actual con signal
- Persiste la selección de idioma en `localStorage`
- Recarga automática cuando cambia el idioma

### 2. Selector de Idioma

El componente `LanguageSelectorComponent` está integrado en el header y permite cambiar entre idiomas.

**Ubicación:** Header superior derecho
**Funcionalidad:** 
- Desplegable para seleccionar idioma
- Guarda preferencia en localStorage
- Recarga la página para aplicar cambios

### 3. Archivos XLIFF

Las traducciones se definen usando el formato XLIFF 1.2 (estándar de Angular).

**Estructura:**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="en-US" target-language="es-ES" datatype="plaintext" original="ng2.template">
    <body>
      <trans-unit id="uniqueId" datatype="html">
        <source>English text</source>
        <target>Texto en español</target>
      </trans-unit>
    </body>
  </file>
</xliff>
```

## Agregar Nuevas Traducciones

### Paso 1: Agregar a messages.xlf
```xml
<trans-unit id="my.feature.title" datatype="html">
  <source>My Feature Title</source>
</trans-unit>
```

### Paso 2: Agregar a messages.es-ES.xlf
```xml
<trans-unit id="my.feature.title" datatype="html">
  <source>My Feature Title</source>
  <target>Título de Mi Característica</target>
</trans-unit>
```

### Paso 3: Usar en Componentes

**Opción A: Usando el servicio**
```typescript
import { Component, inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-my-component',
  template: `<h1>{{ i18n.translate('my.feature.title') }}</h1>`,
})
export class MyComponent {
  i18n = inject(I18nService);
}
```

**Opción B: Usando el Pipe de traducción**
```typescript
import { Component } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-my-component',
  imports: [TranslatePipe],
  template: `<h1>{{ 'my.feature.title' | translate }}</h1>`,
})
export class MyComponent {}
```

## Configuración Angular CLI

La configuración de i18n está en `angular.json`:

```json
{
  "build": {
    "options": {
      "polyfills": ["@angular/localize/init"]
    },
    "configurations": {
      "en-US": {
        "localize": ["en-US"]
      },
      "es-ES": {
        "localize": ["es-ES"],
        "i18nFile": "src/locale/messages.es-ES.xlf",
        "i18nLocale": "es-ES"
      }
    }
  }
}
```

## Comandos Útiles

### Ejecutar en desarrollo
```bash
ng serve
```

### Ejecutar con idioma específico
```bash
ng serve --configuration=es-ES
```

### Build para producción
```bash
ng build
```

### Build con traducción al español
```bash
ng build --configuration=es-ES
```

### Extraer nuevas traducciones
```bash
ng extract-i18n
```

## Notas Importantes

### 1. Idioma por Defecto
- El idioma por defecto es **Inglés (en-US)**
- Se puede cambiar en `i18n.service.ts` en el método `getInitialLanguage()`

### 2. Persistencia
- El idioma seleccionado se guarda en `localStorage` con la clave `'app-language'`
- Se recarga automáticamente al iniciar la aplicación

### 3. Idioma del Navegador
- Si no hay preferencia guardada, la app intenta detectar el idioma del navegador
- Si es español, carga automáticamente el español
- De lo contrario, carga inglés

### 4. Seguridad de Tipos
- El tipo `Language` se define como `'en-US' | 'es-ES'`
- TypeScript ayudará a prevenir errores de idioma inválido

## Troubleshooting

### Las traducciones no aparecen
1. Verifica que el `id` en `messages.xlf` coincida con el de `messages.es-ES.xlf`
2. Asegúrate de que el servicio está inyectado correctamente
3. Recarga la página después de cambiar de idioma

### El idioma no se persiste
1. Verifica que `localStorage` esté habilitado
2. Comprueba la consola del navegador para errores

### El build falla
1. Verifica la sintaxis XML en los archivos XLIFF
2. Asegúrate de que todos los caracteres especiales estén escapados

## Próximos Pasos

1. **Agregar más idiomas**: Copia `messages.es-ES.xlf` y crea nuevos archivos para otros idiomas
2. **Traducir dinámicamente**: Implementa traducciones de contenido del usuario
3. **Formato de números/fechas**: Utiliza pipes de Angular como `| number`, `| currency`, `| date` con configuración local

## Recursos Útiles

- [Angular i18n Guide](https://angular.io/guide/i18n)
- [XLIFF Format Specification](https://docs.oasis-open.org/xliff/v1.2/os/)
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
