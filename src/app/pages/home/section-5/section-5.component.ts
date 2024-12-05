import { Component } from '@angular/core';
import { NewsletterComponent } from "../../../common/newsletter/newsletter.component";

@Component({
  selector: 'app-section-5',
  standalone: true,
  imports: [NewsletterComponent],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.css'
})
export class Section5Component {

    locationIcon = 'assets/icon/location.svg';
    pinIcon = 'assets/icon/pin.svg';
}
