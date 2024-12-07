import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent {

  heroLandscapeImg = 'assets/home/hero-landscape.png';
  floatLandscapeImg = 'assets/home/float-landscape.png';
  floadPortraitImg = 'assets/home/fload-potrait.png';

  heroLeftSvg = 'assets/svg/hero-left.svg';
  heroRightSvg = 'assets/svg/hero-right.svg';


  scrollToSection() {
    const target = document.getElementById('aboutSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
