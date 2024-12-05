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


  sideImg1 = 'assets/about/img-1.png'
  sideImg2 = 'assets/about/img-2.png'

  originIcon = 'assets/icon/origin.svg'
  progressIcon = 'assets/icon/progress.svg'

  patternLeftSvg = 'assets/svg/hero-left.svg'
  patternRightSvg = 'assets/svg/hero-right.svg'
}
