import { Component } from '@angular/core';
import { JoinSectionComponent } from "../../common/join-section/join-section.component";
import { NewsletterComponent } from "../../common/newsletter/newsletter.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ JoinSectionComponent, NewsletterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
