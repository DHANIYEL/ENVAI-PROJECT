import { Component } from '@angular/core';
import { Section1Component } from "./section-1/section-1.component";
import { Section2Component } from "./section-2/section-2.component";
import { JoinSectionComponent } from "../../common/join-section/join-section.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Section1Component, Section2Component, JoinSectionComponent, NewsletterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
