import { Component } from '@angular/core';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {

  ivestmentIcon1 = 'assets/icon/investment-icon1.svg'
  ivestmentIcon2 = 'assets/icon/investment-icon2.svg'

  patternSvg1 = 'assets/svg/pattern1.svg'
  patternSvg2 = 'assets/svg/pattern2.svg'
  patternSvg3 = 'assets/svg/pattern3.svg'
  patternSvg4 = 'assets/svg/pattern4.svg'

  projectImg1 = 'assets/investment-rule/how it works.jpg'
  projectImg2 = 'assets/investment-rule/benfits-of-tokenised.jpg'
}
