import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Debe estar importado

@Component({
  selector: 'app-register',
  standalone: true,

  // 2. ¡ESTO ES LO MÁS CRÍTICO! El RouterModule debe estar aquí.
  imports: [
    RouterModule
  ],

  // 3. Verifica que la ruta del template sea correcta (.html o solo el nombre)
  templateUrl: './register.html', // O simplemente './register' si no usas la extensión
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  // 4. Si tu botón de 'Regístrate' usa una función goToLogin(),
  //    necesitas inyectar el Router también.
  // constructor(private router: Router) { }

}
