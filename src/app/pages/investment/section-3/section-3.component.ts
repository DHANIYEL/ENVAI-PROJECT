import { Component } from '@angular/core';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.css'
})
export class Section3Component {

  rulesIcon = 'assets/icon/token-icon5.svg'

  tokenIcon1 = 'assets/icon/token-icon1.svg'
  tokenIcon2 = 'assets/icon/token-icon2.svg'
  tokenIcon3 = 'assets/icon/token-icon3.svg'
  tokenIcon4 = 'assets/icon/token-icon4.svg'


  patternSvg1 = 'assets/svg/pattern1.svg'
  patternSvg2 = 'assets/svg/pattern2.svg'
  patternSvg3 = 'assets/svg/pattern3.svg'
  patternSvg4 = 'assets/svg/pattern4.svg'

  projectImg1 = 'assets/investment-rule/token terms.jpg'
  projectImg2 = 'assets/investment-rule/investment-terms.jpg'
  projectImg3 = 'assets/investment-rule/governance.jpg'
  projectImg4 = 'assets/investment-rule/regulatory-compliance.jpg'
}
