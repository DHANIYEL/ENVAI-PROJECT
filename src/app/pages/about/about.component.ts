import { Component, OnInit } from '@angular/core';
import { JoinSectionComponent } from "../../common/join-section/join-section.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";
import { Section1Component } from "./section-1/section-1.component";
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [JoinSectionComponent, NewsletterComponent, Section1Component, Section2Component, Section3Component],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // Fixed the typo: changed 'styleUrl' to 'styleUrls'
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle('About Us - My Angular App');

    // Set meta description
    this.metaService.updateTag({ name: 'description', content: 'Learn more about us and our mission on this page.' });
  }
}
