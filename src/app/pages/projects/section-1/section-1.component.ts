import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {
  bannerImg = 'assets/projects/banner.jpg'

  layoutIcon1 = 'assets/icon/layout1.svg'
  layoutIcon2 = 'assets/icon/layout2.svg'
  layoutIcon3 = 'assets/icon/layout3.svg'
  layoutIcon4 = 'assets/icon/layout4.svg'
  layoutIcon5 = 'assets/icon/layout5.svg'
  layoutIcon6 = 'assets/icon/layout6.svg'
  layoutIcon7 = 'assets/icon/layout7.svg'

  investmentIcon = 'assets/icon/investment.svg'

  patternSvg1 = 'assets/svg/pattern1.svg'
  patternSvg2 = 'assets/svg/pattern2.svg'
  patternSvg3 = 'assets/svg/pattern3.svg'
  patternSvg4 = 'assets/svg/pattern4.svg'
}
