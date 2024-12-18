import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.setMetaTags();
      });
  }

  setMetaTags(): void {
    const route = this.router.routerState.snapshot.root.firstChild;
    const routeData = route?.data;

    if (routeData) {
      this.titleService.setTitle(routeData['title']);
      this.meta.updateTag({ name: 'description', content: routeData['description'] });
      this.meta.updateTag({ property: 'og:title', content: routeData['title'] });
      this.meta.updateTag({ property: 'og:description', content: routeData['description'] });
      this.meta.updateTag({ property: 'og:url', content: window.location.href });
    }
  }
}
