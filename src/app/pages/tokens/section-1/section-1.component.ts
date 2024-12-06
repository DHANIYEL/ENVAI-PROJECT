import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {
  bannerImg = 'assets/tokens/token-banner.jpeg';

  securityIcon = 'assets/icon/security.svg'

  tokenIcon1 = 'assets/icon/token-icon1.svg'
  tokenIcon2 = 'assets/icon/token-icon2.svg'
  tokenIcon3 = 'assets/icon/token-icon3.svg'
  tokenIcon4 = 'assets/icon/token-icon4.svg'

  projectImg1 = 'assets/projects/project-img1.png'
  projectImg2 = 'assets/projects/project-img2.png'
  projectImg3 = 'assets/projects/project-img3.png'
  projectImg4 = 'assets/projects/project-img4.png'
  projectImg5 = 'assets/projects/project-img5.png'
  projectImg6 = 'assets/projects/project-img6.png'
  projectImg7 = 'assets/projects/project-img7.png'
  projectImg8 = 'assets/projects/project-img8.png'
}
