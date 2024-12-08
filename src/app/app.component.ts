import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ENVAI-PROJECT';

  showScrollToTop: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition() {
    // Show the scroll-to-top button if the page is scrolled down
    this.showScrollToTop = window.scrollY > 300; // Adjust this value to your preference
  }

  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
