import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {

  bannerImg = 'assets/about/about-banner.jpg'

  bannerImg2 = 'assets/about/about-banner2.jpg'

  sideImg1 = 'assets/about/img-1.png'
  sideImg2 = 'assets/about/img-2.png'
  sideImg3 = 'assets/about/img-3.png'
  sideImg4 = 'assets/about/img-4.png'

  originIcon = 'assets/icon/origin.svg'
  progressIcon = 'assets/icon/progress.svg'
  methodIcon = 'assets/icon/method.svg'
  earthIcon = 'assets/icon/earth.svg'
  purposeIcon = 'assets/icon/purpose.svg'

  patternLeftSvg = 'assets/svg/hero-left.svg'
  patternRightSvg = 'assets/svg/hero-right.svg'
}
