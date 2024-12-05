import { Component } from '@angular/core';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css',
})
export class Section2Component {
  bannerImg2 = 'assets/about/about-banner2.jpg';
  patternRightSvg = 'assets/svg/hero-right.svg'

  methodIcon = 'assets/icon/method.svg';
}
