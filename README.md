# SmartCropApp5

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Internacionalización (i18n) - English & Spanish

La aplicación soporta **internacionalización completa** con idiomas **Inglés (en-US)** y **Español (es-ES)**. El idioma por defecto es **Inglés**.

### Características de i18n:
- ✅ **Idioma por defecto**: Inglés (en-US)
- ✅ **Selector de idioma**: Disponible en el header para cambiar entre idiomas
- ✅ **Persistencia**: El idioma seleccionado se guarda en `localStorage`
- ✅ **Traducciones archivos XLIFF**: Ubicadas en `src/locale/`
- ✅ **Servicio de traducción**: `src/app/services/i18n.service.ts`

### Uso del selector de idioma
El selector está integrado en el header (esquina superior derecha). Puedes cambiar entre:
- 🇺🇸 **English**
- 🇪🇸 **Español**

### Archivos de traducción:
- `src/locale/messages.xlf` - Plantilla principal (Inglés)
- `src/locale/messages.es-ES.xlf` - Traducciones al Español

### Agregar nuevas traducciones:
1. Edita `src/locale/messages.es-ES.xlf` para agregar nuevas unidades de traducción
2. El formato es XLIFF 1.2
3. Cada traducción tiene un `id` único

**Ejemplo:**
```xml
<trans-unit id="myKey" datatype="html">
  <source>English text</source>
  <target>Texto en español</target>
</trans-unit>
```

### Usar traducciones en componentes:
```typescript
import { I18nService } from './services/i18n.service';

export class MyComponent {
  private i18n = inject(I18nService);
  
  // Obtener traducción
  title = this.i18n.translate('my.key');
  
  // Cambiar idioma
  changeLanguage(lang: 'en-US' | 'es-ES') {
    this.i18n.setLanguage(lang);
  }
}
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
