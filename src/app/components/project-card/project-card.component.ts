import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',

})
export class ProjectCardComponent {
  @Input() name: string = 'Project name';
  @Input() description: string = 'Project description over here. Project description over here.';
  @Input() imageUrl: string = ''; // This defines the imageUrl property

  rightArrowIcon = 'assets/icon/right-arrow.svg';

}
