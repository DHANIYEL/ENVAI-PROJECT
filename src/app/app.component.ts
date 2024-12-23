import { Component, HostListener, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ENVAI-PROJECT';
  showScrollToTop: boolean = false;
  isDashboard: boolean = false; // Flag to determine if the route is a dashboard route

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Detect route changes and update `isDashboard` flag
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isDashboard = this.router.url.startsWith('/dashboard'); // Adjust '/dashboard' to your dashboard route
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Update meta tags on route change
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data;
        })
      )
      .subscribe((data) => {
        if (data) {
          this.updateMetaTags(data);
        }
      });
  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition() {
    // Show the scroll-to-top button if the page is scrolled down
    this.showScrollToTop = window.scrollY > 300; // Adjust this value to your preference
  }

  // Scroll to the top of the page when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Method to update meta tags dynamically
  private updateMetaTags(data: { title?: string; description?: string }) {
    // Update title
    if (data.title) {
      this.titleService.setTitle(data.title);
    }

    // Update meta description
    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({
        property: 'og:description',
        content: data.description,
      });
    }
  }
}
