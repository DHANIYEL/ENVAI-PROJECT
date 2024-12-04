import { Component } from '@angular/core';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
  statementImg = 'assets/home/statement-img.png';
  aboutImg = 'assets/home/about-img.png';

  pencilIcon = 'assets/icon/pencil.svg';
  aboutIcon = 'assets/icon/about.svg';

  heroLeftSvg = 'assets/svg/hero-left.svg';
  heroRightSvg = 'assets/svg/hero-right.svg';

}
