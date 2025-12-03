import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- ¡IMPORTA ESTO!
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true, // <-- Asumo que es Standalone
  imports: [
    RouterModule,
    TranslatePipe
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  @Output() itemSelected = new EventEmitter<void>();

  handleItemSelected(): void {
    this.itemSelected.emit();
  }
}
