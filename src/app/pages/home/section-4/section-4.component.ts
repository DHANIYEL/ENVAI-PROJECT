import { Component } from '@angular/core';
import { ProjectCardModule } from '../../../components/project-card/project-card.module'; // Import the new module

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [ProjectCardModule],  // Import the module (not the component directly anymore)
  templateUrl: './section-4.component.html',
  styleUrls: ['./section-4.component.css'],
})
export class Section4Component {
  statementImg = 'assets/icon/projects.svg';  // Example image for Section 4

}
