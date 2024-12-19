import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the document title
    this.titleService.setTitle('About Us - My Angular App');

    // Set standard meta description
    this.metaService.updateTag({ name: 'description', content: 'Learn more about us and our mission on this page.' });

    // Dynamically update Open Graph meta tags
    this.updateOGMetaTags();
  }

  private updateOGMetaTags(): void {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    // Update content dynamically
    if (ogTitle) ogTitle.setAttribute('content', 'About Us - My Angular App');
    if (ogDescription) ogDescription.setAttribute('content', 'Discover our journey and mission on the About Us page.');
    if (ogImage) ogImage.setAttribute('content', 'https://yourdomain.com/assets/about-us-image.png');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
  }
}
