import { Component } from '@angular/core';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { AnimateSectionComponent } from './animate-section/animate-section.component';
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
    AnimateSectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
  ],
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Component logic goes here (if needed)
}
