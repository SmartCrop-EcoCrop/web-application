import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-register',
  standalone: true,

  imports: [
    RouterModule,
    TranslateDirective,
    TranslatePlaceholderDirective
  ],

  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  // 4. Si tu botón de 'Regístrate' usa una función goToLogin(),
  //    necesitas inyectar el Router también.
  // constructor(private router: Router) { }

}
