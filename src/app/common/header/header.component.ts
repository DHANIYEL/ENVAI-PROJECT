import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgIf, NgFor, RouterModule, FormsModule],
})
export class HeaderComponent {
  navLogo = 'assets/logo/LOGO-WHITE.png';

  isMenuOpen = false;
  isDropdownOpen = false;
  searchQuery = '';
  suggestionsList: { name: string, path: string }[] = [];

  private routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tokens', path: '/tokens' },
    { name: 'Management', path: '/management' },
    { name: 'Investment', path: '/investment-rules' },
    { name: 'Invest', path: '/invest' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Risk Statement', path: '/risk-statement' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Facts & Figures', path: '/facts-figures' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSearchInput(): void {
    if (!this.searchQuery) {
      this.suggestionsList = [];
      return;
    }

    // Convert search query to lowercase for case-insensitive matching
    const query = this.searchQuery.toLowerCase().trim();

    // Find matching routes
    this.suggestionsList = this.routes.filter(route =>
      route.name.toLowerCase().includes(query)
    );
  }

  // Modified to handle potential undefined
  navigateToRoute(path?: string): void {
    if (path) {
      this.router.navigate([path]);
      this.searchQuery = '';
      this.suggestionsList = [];
      this.closeMenu();
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  isActive(route: string): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes(route);
  }
}
