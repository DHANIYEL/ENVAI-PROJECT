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

  buildingIcon = 'assets/icon/building.svg'

  rightArrowIcon = 'assets/icon/right-arrow.svg';


  projectImg1 = 'assets/projects/project-img1.png'
  projectImg2 = 'assets/projects/project-img2.png'
  projectImg3 = 'assets/projects/project-img3.png'
  projectImg4 = 'assets/projects/project-img4.png'
  projectImg5 = 'assets/projects/project-img5.png'
  projectImg6 = 'assets/projects/project-img6.png'
  projectImg7 = 'assets/projects/project-img7.png'
  projectImg8 = 'assets/projects/project-img8.png'

  patternSvg1 = 'assets/svg/pattern1.svg'
  patternSvg2 = 'assets/svg/pattern2.svg'
  patternSvg3 = 'assets/svg/pattern3.svg'
  patternSvg4 = 'assets/svg/pattern4.svg'

  projectSvg1 = 'assets/icon/project-svg1.svg'
  projectSvg2 = 'assets/icon/project-svg2.svg'
  projectSvg3 = 'assets/icon/project-svg3.svg'
  projectSvg4 = 'assets/icon/project-svg4.svg'
  projectSvg5 = 'assets/icon/project-svg5.svg'
  projectSvg6 = 'assets/icon/project-svg6.svg'
  projectSvg7 = 'assets/icon/project-svg7.svg'
  projectSvg8 = 'assets/icon/project-svg8.svg'
  projectSvg9 = 'assets/icon/project-svg9.svg'
}
