import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Importa Router y RouterModule

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})



export class LoginComponent {

  constructor(private router: Router) { }

  goToDashboard(): void {
    // Redirigir a la nueva ruta base del Layout
    this.router.navigate(['/app/dashboard']);
  }
}
