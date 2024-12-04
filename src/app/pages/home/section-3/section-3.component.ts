import { Component } from '@angular/core';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.css'
})
export class Section3Component {

  processIcon= 'assets/icon/process.svg'

  timeIcon = 'assets/icon/time.svg';
  smileIcon = 'assets/icon/smile.svg';
  analyticsIcon = 'assets/icon/analytics.svg';
  defenceIcon = 'assets/icon/defence.svg';

  heroLeftSvg = 'assets/svg/hero-left.svg';
  heroRightSvg = 'assets/svg/hero-right.svg';

  joinEnvaiImg = 'assets/home/join-envai-img.png'

}
