import { Component } from '@angular/core';
import { Section1Component } from "./section-1/section-1.component";
import { Section2Component } from "./section-2/section-2.component";
import { JoinSectionComponent } from "../../common/join-section/join-section.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";
import { Section5Component } from "../home/section-5/section-5.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Section1Component, Section2Component, JoinSectionComponent, NewsletterComponent, Section5Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
