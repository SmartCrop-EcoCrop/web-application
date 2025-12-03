import { Component } from '@angular/core';
import { TranslateDirective, TranslatePlaceholderDirective } from '../../directives/translate.directive';

@Component({
  selector: 'app-profile',
  imports: [TranslateDirective, TranslatePlaceholderDirective],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent {

}
