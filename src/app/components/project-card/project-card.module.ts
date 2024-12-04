// src/app/components/project-card/project-card.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common Angular directives (ngIf, ngFor, etc.)
import { ProjectCardComponent } from './project-card.component'; // Import the ProjectCardComponent

@NgModule({
  declarations: [ProjectCardComponent],  // Declare the ProjectCardComponent in this module
  imports: [CommonModule],  // Import CommonModule if you're using Angular's common directives
  exports: [ProjectCardComponent]  // Export the ProjectCardComponent so it can be used in other modules
})
export class ProjectCardModule {}
