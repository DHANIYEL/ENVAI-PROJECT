import { Component } from '@angular/core';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';
import { Section5Component } from './section-5/section-5.component';
import { Section6Component } from './section-6/section-6.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerSectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component
  ],
  template: `
    <app-banner-section></app-banner-section>
    <app-section-2></app-section-2>
    <app-section-3></app-section-3>
    <app-section-4></app-section-4>
    <app-section-5></app-section-5>
    <app-section-6></app-section-6>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Component logic goes here (if needed)
}
