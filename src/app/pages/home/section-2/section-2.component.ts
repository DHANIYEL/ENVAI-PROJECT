import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
  statementImg = 'assets/home/statement-img.png';
  aboutImg = 'assets/home/about-img-1.png';

  pencilIcon = 'assets/icon/pencil.svg';
  aboutIcon = 'assets/icon/about.svg';

  heroLeftSvg = 'assets/svg/hero-left.svg';
  heroRightSvg = 'assets/svg/hero-right.svg';

}
