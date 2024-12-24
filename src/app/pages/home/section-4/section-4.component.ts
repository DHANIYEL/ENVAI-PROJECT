import { Component, NgModuleFactory } from '@angular/core';
import { ProjectCardModule } from '../../../components/project-card/project-card.module'; // Import the new module
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink


@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [ProjectCardModule, NgForOf, RouterModule, CommonModule], // Import the module (not the component directly anymore)
  templateUrl: './section-4.component.html',
  styleUrls: ['./section-4.component.css'],

})
export class Section4Component {

  currentSlide = 0;

  statementImg = 'assets/icon/projects.svg'; // Example image for Section 4
  projects = [
    {
      name: 'sample',
      description: 'sample',
    },
  ];

  projectImg1 = 'assets/projects/project-img1.png'
  projectImg2 = 'assets/projects/project-img2.png'
  projectImg3 = 'assets/projects/project-img3.png'
  projectImg4 = 'assets/projects/project-img4.png'
  projectImg5 = 'assets/projects/project-img5.png'
  projectImg6 = 'assets/projects/project-img6.png'
  projectImg7 = 'assets/projects/project-img7.png'
  projectImg8 = 'assets/projects/project-img8.png'
}
