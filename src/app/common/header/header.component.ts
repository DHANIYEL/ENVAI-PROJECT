import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf for *ngIf
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgIf, RouterModule], // Add RouterModule to the imports array
})
export class HeaderComponent {
  navLogo = 'assets/logo/LOGO-WHITE.png';

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
