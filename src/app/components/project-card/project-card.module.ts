// src/app/components/project-card/project-card.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ProjectCardComponent } from './project-card.component';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    CommonModule,
    RouterModule // Add RouterModule here
  ],
  exports: [ProjectCardComponent]
})
export class ProjectCardModule {}
