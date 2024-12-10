import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerLogo = 'assets/logo/LOGO-WHITE.png';

  searchQuery = '';
  suggestionsList: { name: string, path: string }[] = [];

  private routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tokens', path: '/tokens' },
    { name: 'Investment', path: '/investment-rules' },
    { name: 'Invest', path: '/invest' },
    { name: 'Contact', path: '/contact-us' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Risk Statement', path: '/risk-statement' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Facts & Figures', path: '/facts-figures' }
  ];

  constructor(private router: Router) {}

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
    }
  }
}
