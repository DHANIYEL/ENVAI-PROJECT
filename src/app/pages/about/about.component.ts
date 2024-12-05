import { Component } from '@angular/core';
import { JoinSectionComponent } from "../../common/join-section/join-section.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";
import { Section1Component } from "./section-1/section-1.component";
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [JoinSectionComponent, NewsletterComponent, Section1Component, Section2Component, Section3Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
