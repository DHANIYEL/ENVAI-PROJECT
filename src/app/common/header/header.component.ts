import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf for *ngIf

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgIf], // Add NgIf to the imports array
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
