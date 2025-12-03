import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-register',
  standalone: true,

  imports: [
    RouterModule,
    TranslatePipe
  ],

  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  // 4. Si tu botón de 'Regístrate' usa una función goToLogin(),
  //    necesitas inyectar el Router también.
  // constructor(private router: Router) { }

}
