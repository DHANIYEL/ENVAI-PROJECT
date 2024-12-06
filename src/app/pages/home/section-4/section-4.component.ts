import { Component, NgModuleFactory } from '@angular/core';
import { ProjectCardModule } from '../../../components/project-card/project-card.module'; // Import the new module
import { NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink


@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [ProjectCardModule, NgForOf, RouterModule], // Import the module (not the component directly anymore)
  templateUrl: './section-4.component.html',
  styleUrls: ['./section-4.component.css'],

})
export class Section4Component {
  statementImg = 'assets/icon/projects.svg'; // Example image for Section 4

  projects = [
    {
      name: 'sample',
      description: 'sample',
    },
  ];
}
