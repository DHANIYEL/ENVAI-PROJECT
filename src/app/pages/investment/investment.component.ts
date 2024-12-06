import { Component } from '@angular/core';
import { Section1Component } from "./section-1/section-1.component";
import { Section2Component } from "./section-2/section-2.component";
import { Section3Component } from "./section-3/section-3.component";
import { Section4Component } from "./section-4/section-4.component";
import { Section5Component } from "./section-5/section-5.component";
import { JoinSectionComponent } from "../../common/join-section/join-section.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, JoinSectionComponent, NewsletterComponent],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {

}
