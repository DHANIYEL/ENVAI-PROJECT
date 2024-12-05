import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

  newsLetterImg = 'assets/home/newsletter-img.png'

  xIcon = 'assets/icon/x.svg'
  facebookIcon = 'assets/icon/facebook.svg'
  instagramIcon = 'assets/icon/instagram.svg'
  linkedinIcon = 'assets/icon/linkedin.svg'
  youtubeIcon = 'assets/icon/youtube.svg'
}
