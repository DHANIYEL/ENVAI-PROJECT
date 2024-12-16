import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {
  bannerImg = 'assets/tokens/USECASES-1.jpg';

  securityIcon = 'assets/icon/security.svg'

  tokenIcon1 = 'assets/icon/token-icon1.svg'
  tokenIcon2 = 'assets/icon/token-icon2.svg'
  tokenIcon3 = 'assets/icon/token-icon3.svg'
  tokenIcon4 = 'assets/icon/token-icon4.svg'

  patternSvg1 = 'assets/svg/pattern1.svg'
  patternSvg2 = 'assets/svg/pattern2.svg'
  patternSvg3 = 'assets/svg/pattern3.svg'
  patternSvg4 = 'assets/svg/pattern4.svg'

  tokenImg1 = 'assets/tokens/token-img1-1.png'
  tokenImg2 = 'assets/tokens/token-img2-1.png'
  tokenImg3 = 'assets/tokens/token-img3-1.png'
  tokenImg4 = 'assets/tokens/token-img4-1.png'
}
